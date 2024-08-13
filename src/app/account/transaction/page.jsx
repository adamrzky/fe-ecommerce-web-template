'use client';
import MainLayout from '@/components/MainLayout';
import Menu from '@/components/account/Menu';
import { useAuthStore } from '@/store/authStore';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './transactions.css';  // Pastikan menggunakan file CSS yang sama
import useMenuStore from '@/store/menuStore';
import { useTrxStore } from '@/store/trxStore';
import { useRouter } from 'next/navigation';
import Skeleton from 'react-loading-skeleton';  // Komponen untuk loading state

const MyTransactions = () => {
  const { setActiveMenu } = useMenuStore();
  const { user } = useAuthStore();
  const token = user?.token;
  const [transactions, setTransactions] = useState([]);
  const { setTrx } = useTrxStore();
  const router = useRouter();

  useEffect(() => {
    setActiveMenu('my-transaction');
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/mytransactions`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setTransactions(response.data.data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransactions();
  }, [token]);

  const handleReview = (transaction, trx_id) => {
    setTrx(transaction);
    router.push(`/account/transaction/${trx_id}/create-review`);
  };

  return (
    <MainLayout>
      <section className='mx-auto max-w-[1320px] my-8 px-10 xl:px-0 flex flex-col xl:flex-row'>
        <Menu />
        <div className='flex-1 mt-10 overflow-x-auto xl:mt-0'>
          <h1>My Transactions</h1>
          <table className='min-w-full text-sm align-middle'>
            <thead>
              <tr className='border-b-2 border-neutral-100'>
                <th className='px-3 py-2 text-start text-sm font-semibold uppercase tracking-wider text-neutral-700'>Transaction ID</th>
                <th className='px-3 py-2 text-start text-sm font-semibold uppercase tracking-wider text-neutral-700'>Product Name</th>
                <th className='px-3 py-2 text-start text-sm font-semibold uppercase tracking-wider text-neutral-700'>Total</th>
                <th className='px-3 py-2 text-start text-sm font-semibold uppercase tracking-wider text-neutral-700'>Payment Type</th>
                <th className='px-3 py-2 text-start text-sm font-semibold uppercase tracking-wider text-neutral-700'>Payment Date</th>
                <th className='px-3 py-2 text-start text-sm font-semibold uppercase tracking-wider text-neutral-700'>Payment Status</th>
                <th className='px-3 py-2 text-start text-sm font-semibold uppercase tracking-wider text-neutral-700'>Action</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.ID} className='border-b border-neutral-100 hover:bg-neutral-50'>
                  <td className='p-3 font-semibold text-neutral-600'>{transaction.TRX_ID}</td>
                  <td className='p-3 text-neutral-600'>{transaction.Product.Name}</td>
                  <td className='p-3 font-medium text-neutral-600'>Rp {transaction.TOTAL.toLocaleString()}</td>
                  <td className='p-3 text-neutral-600'>{transaction.PAY_TYPE}</td>
                  <td className='p-3 font-medium'>{transaction.pay_DATE || 'N/A'}</td>
                  <td>
                    <div className={`inline-block px-2 py-1 text-xs font-semibold leading-4 text-black-800 ${transaction.STATUS == 1 ? "bg-red-100" : "bg-green-200"} bg-blue-100 rounded-full whitespace-nowrap`}>
                      {transaction.STATUS == 1 ? "Pending" : "Success"}
                    </div>
                  </td>
                  {transaction.STATUS == 2 ? (
                    <td>
                      <button
                        onClick={() => handleReview(transaction, transaction.TRX_ID)}
                        className='inline-flex items-center justify-center px-3 py-2 text-xs font-medium bg-blue-600 border rounded-lg cursor-pointer border-neutral-200 text-white hover:border-neutral-30 hover:bg-blue-700 active:border-neutral-200'
                      >
                        Create Review
                      </button>
                    </td>
                  ) : (
                    <td><p></p></td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </MainLayout>
  );
};

export default MyTransactions;
