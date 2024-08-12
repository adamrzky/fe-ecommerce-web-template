'use client';
import MainLayout from '@/components/MainLayout';
import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';
import baseUrl from '@/utils/constains';
import Swal from 'sweetalert2';

import axios from 'axios';
import { useProductCheckoutStore } from '@/store/productCheckoutStore';
import Modal from 'react-modal';
import CryptoJS from 'crypto-js';
import QRCode from 'qrcode.react';
import Skeleton from 'react-loading-skeleton';

const CheckoutPage = () => {
  const router = useRouter();
  const { id } = useProductCheckoutStore();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('qris');
  const { user } = useAuthStore();
  const [profileData, setProfileData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [paymentMethods, setPaymentMethods] = useState([]);
  // State untuk menyimpan data pembayaran
  const [paymentData, setPaymentData] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    if (user) {
      console.log(user);
      axios
        .get(`${baseUrl}/my-profiles`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        })
        .then((response) => {
          setProfileData(response.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    const fetchProduct = async () => {
      try {
        let response = await fetch(`${baseUrl}/product/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        let data = await response.json();
        if (data.status === 'success') {
          setProduct(data.data);
        } else {
          console.error('Failed to fetch product details');
        }
      } catch (error) {
        console.error('Error fetching product details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, user]);

  const handleDuitkuPayment = async () => {
    if (!profileData || !product) {
      Swal.fire(
        'Error',
        'Cannot proceed without user or product data.',
        'error'
      );
      return;
    }

    const generateOrderId = () => {
      return 'ORD' + Math.random().toString(36).substring(2, 15).toUpperCase();
    };

    const payload = {
      merchantCode: 'DS19954',
      paymentAmount: parseInt(product.price),
      merchantOrderID: generateOrderId(),
      productDetails: 'Pembayaran untuk Toko Contoh',
      email: profileData?.user.email,
      paymentMethod: 'SP',
      apiKey: '21c42276c6d03ddee20ab69e23deaa10',
    };

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/payment-inquiry`,
        payload
      );
      const data = response.data;

      if (data.statusCode === '00') {
        setPaymentData(data);
        setModalIsOpen(true); // Buka modal setelah mendapatkan data
      } else {
        Swal.fire(
          'Gagal',
          `Gagal mendapatkan URL pembayaran. Pesan: ${data.statusMessage}`,
          'error'
        );
      }
    } catch (error) {
      console.error('Error during payment processing:', error);
      Swal.fire(
        'Error',
        'Terjadi kesalahan saat proses pembayaran: ' + error.message,
        'error'
      );
    }
  };

  const handlePaymentSubmission = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      pay_DATE: new Date(),
      pay_TYPE: paymentMethod,
      product_ID: parseInt(id),
      status: 1,
      total: parseFloat(product.price),
      trx_ID: `TRX${Math.random().toString().slice(2, 11)}`,
      user_ID: profileData.user_id,
    };

    try {
      let response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/transactions`,
        payload
      );
      if (response.data.status === 'success') {
        Swal.fire(
          'Transaction Successful!',
          'Your purchase has been processed successfully.',
          'success'
        ).then((result) => {
          if (result.isConfirmed) {
            // router.push('/success');
          }
        });
      } else {
        throw new Error('Transaction failed: ' + response.data.message);
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Transaction Failed',
        text: 'There was an issue with your payment: ' + error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const handlePaymentProcessing = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!profileData || !product) {
      Swal.fire(
        'Error',
        'Cannot proceed without user or product data.',
        'error'
      );
      setLoading(false);
      return;
    }

    const generateOrderId = () => {
      return 'ORD' + Math.random().toString(36).substring(2, 15).toUpperCase();
    };

    const uniquiOrderId = generateOrderId();

    const paymentPayload = {
      merchantCode: 'DS19954',
      paymentAmount: parseInt(product.price),
      merchantOrderID: uniquiOrderId,
      productDetails: 'Pembayaran untuk Toko Contoh',
      email: profileData?.user.email,
      paymentMethod: 'SP', // Using selected payment method
      apiKey: '21c42276c6d03ddee20ab69e23deaa10',
    };

    try {
      // Step 1: Perform payment inquiry
      const paymentResponse = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/payment-inquiry`,
        paymentPayload
      );
      const paymentData = paymentResponse.data;

      if (paymentData.statusCode !== '00') {
        console.log('Payment Response Data:', paymentData);
        throw new Error(
          `Failed to get payment URL: ${paymentData.statusMessage}`
        );
      }

      // Step 2: Proceed with transaction submission
      const transactionPayload = {
        pay_DATE: new Date(),
        pay_TYPE: paymentMethod,
        product_ID: parseInt(product.id),
        status: 1,
        total: parseFloat(product.price),
        trx_ID: uniquiOrderId,
        user_ID: profileData.user_id,
      };

      const transactionResponse = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/transactions`,
        transactionPayload
      );

      if (transactionResponse.data.status === 'success') {
        Swal.fire(
          'Transaction Successful!',
          'Your purchase has been processed successfully.',
          'success'
        ).then((result) => {
          if (result.isConfirmed) {
            // Redirect or perform additional actions
          }
        });
      } else {
        throw new Error(
          'Transaction failed: ' + transactionResponse.data.message
        );
      }

      setPaymentData(paymentData);
      setModalIsOpen(true); // Open modal if needed
    } catch (error) {
      console.log(error);
      Swal.fire(
        'Error',
        `There was an issue with your payment: ${error.message}`,
        'error'
      );
    } finally {
      setLoading(false);
    }
  };

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '80%',
      maxWidth: '600px',
    },
  };

  if (loading)
    return (
      <MainLayout>
        <section className='mx-auto max-w-[1320px] my-8 px-10 xl:px-0'>
          <Skeleton count={4} className='my-4' />
        </section>
      </MainLayout>
    );
  if (!product)
    return (
      <MainLayout>
        <section className='mx-auto max-w-[1320px] my-8 px-10 xl:px-0'>
          <p className='text-sm font-medium text-slate-700'>
            Product Not Found
          </p>
        </section>
      </MainLayout>
    );

  return (
    <MainLayout>
      <div className='container mx-auto my-8'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
          {/* Product Image */}
          <div className='md:col-span-2'>
            <img
              src={product?.image_url || 'https://via.placeholder.com/500x300'}
              alt={product?.name}
              className='w-full h-auto rounded shadow-lg'
            />
          </div>
          {/* Product Details and Payment Form */}
          <div className='space-y-4'>
            <div className='p-4 bg-white rounded shadow-lg'>
              <h1 className='text-2xl font-semibold'>{product?.name}</h1>
              <p className='text-lg text-gray-500'>
                RP {product?.price?.toFixed(2)}
              </p>
              <p className='mt-2 text-sm text-gray-700'>
                {product?.description}
              </p>
            </div>
            {console.log(product)}
            {/* Payment Form */}
            <form
              onSubmit={handlePaymentProcessing}
              className='p-4 space-y-4 bg-white rounded shadow-lg'
            >
              <h2 className='text-lg font-semibold'>Checkout Information</h2>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                value={profileData?.user.email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className='block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm'
                readOnly
              />
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700'
              >
                Price
              </label>
              <input
                type='price'
                id='price'
                value={product?.price?.toFixed(2)}
                onChange={(e) => setEmail(e.target.value)}
                required
                className='block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm'
                readOnly
              />
              <label
                htmlFor='paymentMethod'
                className='block text-sm font-medium text-gray-700'
              >
                Payment Method
              </label>
              <select
                id='paymentMethod'
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className='block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm'
              >
                <option value='qris'>QRIS</option>
                <option value='credit-card'>Credit Card</option>
                <option value='paypal'>PayPal</option>
                <option value='bank-transfer'>Bank Transfer</option>
              </select>
              {/* <button
                type='submit'
                className='flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700'
              >
                Buy Now
              </button> */}
              <button
                type='submit'
                className='flex justify-center w-full px-4 py-2 mt-2 text-sm font-medium text-white bg-green-500 border border-transparent rounded-md shadow-sm hover:bg-green-600'
              >
                Fast Pay With Qris
              </button>
              {/* <button
                type='button'
                onClick={handleDuitkuPayment}
                className='flex justify-center w-full px-4 py-2 mt-2 text-sm font-medium text-white bg-green-500 border border-transparent rounded-md shadow-sm hover:bg-green-600'
              >
                Fast Pay With Qris
              </button> */}
            </form>
          </div>
        </div>
      </div>
      {/* Modal for Payment Methods */}
      <Modal
        style={customStyles}
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel='Payment Methods'
      >
        <h2 className='text-lg font-bold'>Available Payment Methods</h2>
        <div className='flex flex-col space-y-2'>
          {paymentMethods.map((method, index) => (
            <div key={index} className='flex items-center justify-between'>
              <img
                src={method.paymentImage}
                alt={method.paymentName}
                className='w-12 h-12'
              />
              <span>{method.paymentName}</span>
            </div>
          ))}
        </div>
        <button
          onClick={() => setIsModalOpen(false)}
          className='px-4 py-2 mt-4 text-white bg-red-500 rounded hover:bg-red-600'
        >
          Close
        </button>
      </Modal>
      <Modal
        style={customStyles}
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <section className='flex flex-col items-center max-w-2xl gap-y-4'>
          <h2>Pembayaran QR Code</h2>
          {paymentData && (
            <>
              <p>
                <a
                  href={paymentData.paymentUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Klik di sini untuk membayar
                </a>
              </p>
              <QRCode value={paymentData.qrString} size={230} />
            </>
          )}
          <button onClick={() => setModalIsOpen(false)}>Tutup</button>
        </section>
      </Modal>
    </MainLayout>
  );
};

export default CheckoutPage;
