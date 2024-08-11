'use client';

import baseUrl from '@/utils/constains';
import { format, parseISO } from 'date-fns';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';

const ReviewProductSection = ({productID}) => {
  const id = productID;
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        let result = await fetch(`${baseUrl}/reviews-product/${id}`, {
          cache: 'no-store',
        });

        if (!result.ok) {
          throw new Error('Network response was not ok');
        }

        let data = await result.json();
        setReviews(data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  return (
    <section className='w-full'>
      <h1>{id}</h1>
      <h1 className='my-16 text-xl font-semibold text-center text-slate-700'>
        Review Product
      </h1>

      {loading ? (
        <Skeleton count={5} className='mt-6' />
      ) : (
        <section className='relative flex flex-wrap justify-center w-full gap-3 lg:justify-start'>
          {reviews && reviews.length > 0 ? (
            reviews.map((item, index) => (
              <div key={index} className='w-[305px] shadow-lg p-5'>
                <div>
                  <div className='flex items-center gap-3'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='#3E3E3E'
                      className='size-4'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
                      />
                    </svg>
                    <h2 className='text-sm font-medium capitalize md:text-base'>
                      {item.user.username}
                    </h2>
                  </div>
                  <p className='mt-1 text-xs text-slate-400'>
                    {format(parseISO(item.updated_at), 'dd MMM yyyy')}
                  </p>
                </div>
                <div className='mt-5'>
                  <p className='text-xs leading-relaxed md:text-sm text-slate-700'>
                    {item.content}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className='w-full p-8 border border-[#EB6D20] border-solid rounded-md'>
              <p className='text-sm font-semibold tracking-wide text-center md:text-base text-[#EB6D20]'>
                This Product didn't have any reviews
              </p>
            </div>
          )}
        </section>
      )}

      <div className='w-full text-center'>
        <button className='my-10 bg-[#EB8426] hover:bg-[#EB6D20] px-7 py-3 text-white text-sm font-medium rounded-full'>
          View More
        </button>
      </div>
    </section>
  );
};

export default ReviewProductSection;
