'use client';
import MainLayout from '@/components/MainLayout';
// import Menu from "@/components/account/Menu";
import { useAuthStore } from '@/store/authStore';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './transactions.css';
import Skeleton from 'react-loading-skeleton';

const Transactions = () => {
  const { user } = useAuthStore();
  const token = user?.token;
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/transactions/all`,
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        setTransactions(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransactions();
  }, [token]);

  return (
      <section>
        <div className='container px-4 pt-6 mx-auto lg:px-8 lg:pt-8 xl:max-w-7xl'>
          <div className='flex flex-col gap-2 text-center sm:flex-row sm:items-center sm:justify-between sm:text-start'>
            <div className='grow'>
              <h1 className='mb-1 text-lg font-semibold'>Transaction</h1>
            </div>
            <div className='flex items-center justify-center flex-none gap-2 rounded sm:justify-end'>
              <div className='relative'>
                <div className='absolute inset-y-0 flex items-center justify-center w-10 my-px rounded-l-lg pointer-events-none start-0 ms-px text-neutral-500'>
                  <svg
                    className='inline-block w-4 h-4 hi-mini hi-magnifying-glass'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z'
                      clip-rule='evenodd'
                    />
                  </svg>
                </div>
                <input
                  type='text'
                  id='search'
                  name='search'
                  placeholder='Search everything..'
                  className='block w-full py-2 text-sm leading-6 border rounded-lg border-neutral-200 pe-3 ps-10 placeholder-neutral-500 focus:border-neutral-500 focus:ring focus:ring-neutral-500/25'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='container p-4 mx-auto lg:p-8 xl:max-w-7xl'>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 shadow-lg'>
            <div className='flex flex-col bg-white border rounded-lg sm:col-span-2 lg:col-span-4'>
              <div className='flex flex-col items-center justify-between gap-4 p-5 text-center border-b border-neutral-100 sm:flex-row sm:text-start'>
                <div>
                  <h2 className='mb-0.5 font-semibold'>Transaction List</h2>
                </div>
              </div>
              <div className='p-5'>
                <div className='min-w-full overflow-x-auto rounded'>
                  <table className='min-w-full text-sm align-middle'>
                    <thead>
                      <tr className='border-b-2 border-neutral-100'>
                        <th className='min-w-[140px] px-3 py-2 text-start text-sm font-semibold uppercase tracking-wider text-neutral-700'>
                          Transaction ID
                        </th>
                        <th className='min-w-[180px] px-3 py-2 text-start text-sm font-semibold uppercase tracking-wider text-neutral-700'>
                          Product Name
                        </th>
                        <th className='min-w-[180px] px-3 py-2 text-start text-sm font-semibold uppercase tracking-wider text-neutral-700'>
                          Total
                        </th>
                        <th className='min-w-[180px] px-3 py-2 text-start text-sm font-semibold uppercase tracking-wider text-neutral-700'>
                          Payment Type
                        </th>
                        <th className='px-3 py-2 text-sm font-semibold tracking-wider uppercase text-start text-neutral-700'>
                          Payment Date
                        </th>
                        <th className='px-3 py-2 text-sm font-semibold tracking-wider uppercase text-start text-neutral-700'>
                        Status
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {loading ? (
                        <tr>
                          <td colSpan="6" className="p-4">
                            <Skeleton count={5} className='mt-6' />
                          </td>
                        </tr>
                      ) : (
                        transactions.map((transaction) => (
                          <tr key={transaction.ID} className='border-b border-neutral-100 hover:bg-neutral-50'>
                            <td className='p-3 font-semibold text-start text-neutral-600'>
                              {transaction.TRX_ID}
                            </td>
                            <td className='p-3 text-start text-neutral-600'>
                              {transaction.Product.Name}
                            </td>
                            <td className='p-3 font-medium text-neutral-600'>
                              Rp {transaction.TOTAL.toLocaleString()}
                            </td>
                            <td className='p-3 text-start'>
                              {transaction.PAY_TYPE}
                            </td>
                            <td className='p-3 font-medium'>
                              {transaction.pay_DATE || 'N/A'}
                            </td>
                            <td className='flex gap-4 items-center'>
                              <div className={`inline-block px-2 py-1 text-xs font-semibold leading-4 text-blue-800 ${transaction.STATUS == 1 ? "bg-blue-100" : "bg-green-200"} bg-blue-100 rounded-full whitespace-nowrap`}>
                              {transaction.STATUS == 1 ? "Pending" : "Success"}
                              </div>
                              <button className='inline-flex items-center justify-center px-3 py-2 text-xs font-medium leading-5 bg-blue-600 border rounded-lg cursor-pointer border-neutral-200 text-white hover:border-neutral-30 hover:bg-blue-700 active:border-neutral-200'>Send Callback</button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Transactions;
