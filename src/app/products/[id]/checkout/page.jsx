"use client";
import MainLayout from "@/components/MainLayout";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import baseUrl from "@/utils/constains";
import Swal from 'sweetalert2';

import axios from "axios";

const CheckoutPage = () => {
  const router = useRouter();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const { user } = useAuthStore();
  const [ profileData, setProfileData ] = useState(null);

  // Mengambil data produk berdasarkan ID dari URL
  useEffect(() => {
    if(user) {
      axios.get(`${baseUrl}/my-profiles`, {
         headers: {
            Authorization: `Bearer ${user.token}`
         }
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
        let response = await fetch(
          `${baseUrl}/product/${id}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        let data = await response.json();
        if (data.status === "success") {
          setProduct(data.data);
        } else {
          console.error("Failed to fetch product details");
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };
    
   
    fetchProduct();
  }, [id, user]);


  

  const handlePaymentSubmission = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    const payload = {
      pay_DATE: new Date,
      pay_TYPE: paymentMethod,
      product_ID: parseInt(id), 
      status: 1, 
      total: parseFloat(product.price), 
      trx_ID: `TRX${Math.random().toString().slice(2, 11)}`,
      user_ID: profileData.user_id
    };
  
  
    try {
      let response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/transactions`, payload);
      if (response.data.status === "success") {
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
  if (loading) return <MainLayout>Loading...</MainLayout>;
  if (!product) return <MainLayout>Product not found!</MainLayout>;

  return (
    <MainLayout>
      <div className="container mx-auto my-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <img
              src={product.image_url || "https://via.placeholder.com/500x300"}
              alt={product.name}
              className="w-full h-auto shadow-lg rounded"
            />
          </div>

          <div className="space-y-4">
            <div className="p-4 shadow-lg rounded bg-white">
              <h1 className="text-2xl font-semibold">{product.name}</h1>
              <p className="text-lg text-gray-500">
                RP {product.price.toFixed(2)}
              </p>
              <p className="text-sm text-gray-700 mt-2">
                {product.description}
              </p>
            </div>

            <form
              onSubmit={handlePaymentSubmission}
              className="p-4 shadow-lg rounded bg-white space-y-4"
            >
              <h2 className="text-lg font-semibold">Checkout Information</h2>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />

              <label
                htmlFor="paymentMethod"
                className="block text-sm font-medium text-gray-700"
              >
                Payment Method
              </label>
              <select
                id="paymentMethod"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              >
                <option value="credit-card">Credit Card</option>
                <option value="paypal">PayPal</option>
                <option value="bank-transfer">Bank Transfer</option>
                <option value="qris">QRIS</option>
              </select>

              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
              >
                Buy Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CheckoutPage;
