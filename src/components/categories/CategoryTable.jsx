'use client';

import { useAuthStore } from '@/store/authStore';
import baseUrl from '@/utils/constains';
import axios from 'axios';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';

const CategoryTable = ({ categories, loading }) => {
  const { user } = useAuthStore();
  const token = user?.token;
  const [data, setData] = useState(categories);
  const [fetchStatus, setFetchStatus] = useState(false);

  const fetchData = async () => {
    try {
      let res = await axios.get(`${baseUrl}/category`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(res.data.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
    if (fetchStatus || !categories || categories.length === 0) {
      fetchData();
      setFetchStatus(false);
    }
  }, [fetchStatus]);

  useEffect(() => {
    if (!categories || categories.length === 0) {
      fetchData();
    }
  }, []);

  const handleDelete = async (deletedId) => {
    let text = 'Are you sure?';
    if (confirm(text) === true) {
      try {
        await axios.delete(`${baseUrl}/category/${deletedId}`, {
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
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 shadow-lg'>
          <div className='flex flex-col bg-white border rounded-lg sm:col-span-2 lg:col-span-4'>
            <div className='flex flex-col items-center justify-between gap-4 p-5 text-center border-b border-neutral-100 sm:flex-row sm:text-start'>
              <div>
                <h2 className='mb-0.5 font-semibold'>Category List</h2>
              </div>
            </div>
            <div className='p-5'>
              <div className='min-w-full overflow-x-auto rounded'>
                <table className='min-w-full text-sm align-middle'>
                  <thead>
                    <tr className='border-b-2 border-neutral-100'>
                      <th className='min-w-[140px] px-3 py-2 text-start text-sm font-semibold uppercase tracking-wider text-neutral-700'>
                        No
                      </th>
                      <th className='min-w-[180px] px-3 py-2 text-start text-sm font-semibold uppercase tracking-wider text-neutral-700'>
                        Name
                      </th>
                      <th className='min-w-[180px] px-3 py-2 text-start text-sm font-semibold uppercase tracking-wider text-neutral-700'>
                        Action
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
                      <>
                      {data && data.length > 0 ? (
                        data.map((item, index) => (
                          <tr key={index}>
                            <td className='p-3 font-semibold text-start text-neutral-600'>
                            {index + 1}
                            </td>
                            <td className='p-3 text-start text-neutral-600'>
                            {item.name}
                            </td>
                            <td className='p-3 font-medium text-neutral-600 flex gap-4'>
                            <Link
                              href={`/dashboard/categories/${item.id}/edit`}
                              className='inline-flex items-center justify-center px-3 py-2 text-xs font-medium leading-5 bg-green-600 border rounded-lg cursor-pointer border-neutral-200 text-white hover:border-neutral-30 hover:bg-green-700 active:border-neutral-200'
                            >
                            Update
                            </Link>
                            <button
                              onClick={() => handleDelete(item.id)}
                              className='inline-flex items-center justify-center px-3 py-2 text-xs font-medium leading-5 text-white border rounded-lg cursor-pointer bg-rose-600 hover:bg-rose-700 border-neutral-200 hover:border-neutral-300 active:border-neutral-200'
                            >
                            Delete
                            </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td
                            colSpan='3'
                            className='px-3 py-10 font-medium text-center text-slate-700'
                          >
                            No data available
                          </td>
                        </tr>
                      )}
                    </>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default CategoryTable;
