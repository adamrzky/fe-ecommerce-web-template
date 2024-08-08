'use client';

import { useAuthStore } from '@/store/authStore';
import baseUrl from '@/utils/constains';
import axios from 'axios';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const ReviewTable = ({ reviews }) => {
  const { user } = useAuthStore();
  const token = user?.token;
  const [data, setData] = useState(reviews);
  const [fetchStatus, setFetchStatus] = useState(false);

  const fetchData = async () => {
    let res = await axios.get(`${baseUrl}/my-reviews`, {
      cache: 'no-store',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setData(res.data.data);
  };

  useEffect(() => {
    if (fetchStatus) {
      fetchData();
      setFetchStatus(false);
    }
  }, [fetchStatus]);

  const handleDelete = async (deletedId) => {
    let text = 'Are you sure?';
    if (confirm(text) == true) {
      try {
        await axios.delete(`${baseUrl}/reviews/${deletedId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setFetchStatus(true);
      } catch (err) {
        alert(err);
      }
    }
  };

  return (
    <>
      {/* Page Header */}
      <div className='container px-4 pt-6 mx-auto mt-4 lg:px-4 lg:pt-8 xl:max-w-7xl'>
        <div className='flex flex-col gap-2 text-center sm:flex-row sm:items-center sm:justify-between sm:text-start'>
          <div className='grow'>
            <h1 className='mb-1 text-lg font-semibold'>My Reviews</h1>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div className='container p-4 mx-auto lg:p-4 xl:max-w-7xl'>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8'>
          <div className='flex flex-col bg-white border rounded-lg sm:col-span-2 lg:col-span-4'>
            <div className='flex flex-col items-center justify-between gap-4 p-5 text-center border-b border-neutral-100 sm:flex-row sm:text-start'>
              <div>
                <h2 className='mb-0.5 font-semibold'>Recent reviews</h2>
              </div>
            </div>
            <div className='p-5'>
              <div className='min-w-full overflow-x-auto rounded'>
                <table className='min-w-full text-sm align-middle'>
                  <thead>
                    <tr className='border-b-2 border-neutral-100'>
                      <th className='min-w-[40px] px-3 py-2 text-start text-sm font-semibold capitalize tracking-wider text-neutral-700'>
                        No
                      </th>
                      <th className='min-w-[80px] px-3 py-2 text-start text-sm font-semibold capitalize tracking-wider text-neutral-700'>
                        TRX-ID
                      </th>
                      <th className='min-w-[180px] px-3 py-2 text-start text-sm font-semibold capitalize tracking-wider text-neutral-700'>
                        Product
                      </th>
                      <th className='min-w-[240px] px-3 py-2 text-start text-sm font-semibold capitalize tracking-wider text-neutral-700'>
                        Commentar
                      </th>
                      <th className='px-3 py-2 text-sm font-semibold tracking-wider capitalize text-start text-neutral-700'>
                        Updated At
                      </th>
                      <th className='min-w-[100px] p-3 py-2 text-end text-sm font-semibold capitalize tracking-wider text-neutral-700'></th>
                    </tr>
                  </thead>

                  <tbody>
                    {data.length > 0 &&
                      data.map((item, index) => {
                        return (
                          <tr
                            key={index}
                            className='text-xs border-b border-neutral-100 hover:bg-neutral-50'
                          >
                            <td className='p-3 font-semibold text-start text-neutral-600'>
                              {index + 1}
                            </td>
                            <td className='p-3 text-start text-neutral-600'>
                              {item.transaction.transaction_id}
                            </td>
                            <td className='p-3 text-start text-neutral-600'>
                              {item.product.name}
                            </td>
                            <td className='p-3 text-xs text-start'>
                              {item.content}
                            </td>
                            <td className='p-3 text-start'>
                              {' '}
                              {format(
                                parseISO(item.updated_at),
                                'dd MMM yyyy - HH:mm'
                              )}
                            </td>
                            <td className='flex p-3 font-medium text-end gap-x-2'>
                              <Link
                                href={`/my-reviews/${item.id}/edit`}
                                className='inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium leading-5 bg-white border rounded-lg cursor-pointer border-neutral-200 text-neutral-800 hover:border-neutral-300 hover:text-neutral-950 active:border-neutral-200'
                              >
                                <span>Update</span>
                              </Link>
                              <a
                                onClick={() => {
                                  handleDelete(item.id);
                                }}
                                className='inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium leading-5 text-white border rounded-lg cursor-pointer bg-rose-600 border-neutral-200 hover:border-neutral-300 active:border-neutral-200'
                              >
                                <span>Delete</span>
                              </a>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewTable;
