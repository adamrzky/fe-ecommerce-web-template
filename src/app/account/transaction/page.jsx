'use client';
import MainLayout from '@/components/MainLayout';
import Menu from '@/components/account/Menu';
import { useAuthStore } from '@/store/authStore';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './transactions.css';
import useMenuStore from '@/store/menuStore';
import { useTrxStore } from '@/store/trxStore';
import { useRouter } from 'next/navigation';

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

  console.log(transactions)
  return (
    <MainLayout>
      <section
        id='account'
        className='mx-auto max-w-[1320px] my-8 px-10 xl:px-0 flex flex-col xl:flex-row'
      >
      <Menu/>
      <div className='container p-4 mx-auto lg:p-4 xl:max-w-7xl'>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8'>
          <div className='flex flex-col bg-white border rounded-lg sm:col-span-2 lg:col-span-4'>
            <div className='flex flex-col items-center justify-between gap-4 p-5 text-center border-b border-neutral-100 sm:flex-row sm:text-start'>
              <div>
                <h2 className='mb-0.5 font-semibold'>My Transactions</h2>
              </div>
            </div>
            <div className='p-5'>
              <div className='min-w-full overflow-x-auto rounded'>
                <table className='min-w-full text-sm align-middle'>
                  <thead>
                    <tr className='border-b-2 border-neutral-100'>
                      <th className='min-w-[40px] px-3 py-2 text-start text-sm font-semibold capitalize tracking-wider text-neutral-700'>
                      Transaction ID
                      </th>
                      <th className='min-w-[80px] px-3 py-2 text-start text-sm font-semibold capitalize tracking-wider text-neutral-700'>
                      Product Name
                      </th>
                      <th className='min-w-[180px] px-3 py-2 text-start text-sm font-semibold capitalize tracking-wider text-neutral-700'>
                      Total
                      </th>
                      <th className='min-w-[240px] px-3 py-2 text-start text-sm font-semibold capitalize tracking-wider text-neutral-700'>
                      Payment Type
                      </th>
                      <th className='px-3 py-2 text-sm font-semibold tracking-wider capitalize text-start text-neutral-700'>
                      Payment Date
                      </th>
                      <th className='min-w-[100px] p-3 py-2 text-end text-sm font-semibold capitalize tracking-wider text-neutral-700'>
                      Status
                      </th>
                      <th className='min-w-[100px] p-3 py-2 text-end text-sm font-semibold capitalize tracking-wider text-neutral-700'>
                      Action
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {transactions.map((transaction) => (
                      <tr
                      key={transaction.ID}
                      className='text-xs border-b border-neutral-100 hover:bg-neutral-50'
                    >
                      <td className='p-3 font-semibold text-start text-neutral-600'>
                      {transaction.TRX_ID}
                      </td>
                      <td className='p-3 text-start text-neutral-600'>
                      {transaction.Product.Name}
                      </td>
                      <td className='p-3 text-start text-neutral-600'>
                      Rp {transaction.TOTAL.toLocaleString()}
                      </td>
                      <td className='p-3 text-xs text-start'>
                      {transaction.PAY_TYPE}
                      </td>
                      <td className='p-3 text-start'>
                      {transaction.pay_DATE || 'N/A'}
                      </td>
                      <td className='p-3 text-end'>
                      {transaction.STATUS == 1 ? 'Pending' : 'Success'}
                      </td>
                      {transaction.STATUS == 2 ? (
                        <td className='p-3 text-start'>
                          <button
                            onClick={() =>
                              handleReview(transaction, transaction.TRX_ID)
                            }
                            className='text-sm font-medium text-[#EB8426] cursor-pointer'
                          >
                            Create Review
                          </button>
                        </td>
                      ) : (
                        <td className='p-3 text-center'>
                          -
                        </td>
                      )}
                    </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </MainLayout>
  );
};

export default MyTransactions;
