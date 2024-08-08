'use client';

import { useAuthStore } from '@/store/authStore';
import baseUrl from '@/utils/constains';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { showErrorAlert } from '../Notification';

const ReviewForm = ({ id }) => {
  const { user } = useAuthStore();
  const token = user?.token;
  const router = useRouter();
  const initialForm = {
    id: null,
    content: '',
    transaction_id: '',
    product_id: '',
  };
  const [input, setInput] = useState(initialForm);
  const [isLoading, setIsLoading] = useState(false);
  const backToTable = () => {
    router.push('/my-reviews');
  };

  useEffect(() => {
    if (id) {
      axios
        .get(`${baseUrl}/reviews/${id}`)
        .then((res) => {
          let { id, content, transaction_id, product_id } = res.data.data;
          setInput({ id, content, transaction_id, product_id });
        })
        .catch((err) => {
          console.log(err);
          showErrorAlert(err);
          router.push('/my-reviews');
        });
    }
  }, [id]);

  const handleInput = (event) => {
    let { value, name } = event.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const { content, transaction_id, product_id, id } = input;
    try {
      if (id) {
        await axios.put(
          `${baseUrl}/reviews/${id}`,
          {
            content,
            transaction_id: parseInt(transaction_id),
            product_id: parseInt(product_id),
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      } else {
        await axios.post(
          `${baseUrl}/reviews`,
          {
            content,
            transaction_id: parseInt(transaction_id),
            product_id: parseInt(product_id),
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      }
      setInput(initialForm);
      setIsLoading(false);
      router.push('/my-reviews');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {/* Page Content */}
      <div className='container px-4 pt-6 mx-auto mt-12 border border-solid rounded-md lg:px-8 lg:pt-8 xl:max-w-3xl border-slate-200/75'>
        <div className='flex flex-col gap-2 text-center sm:flex-row sm:items-center sm:justify-between sm:text-start'>
          <div className='flex grow gap-x-4'>
            <button
              onClick={() => {
                backToTable();
              }}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='size-4'
              >
                <path
                  fillRule='evenodd'
                  d='M7.28 7.72a.75.75 0 0 1 0 1.06l-2.47 2.47H21a.75.75 0 0 1 0 1.5H4.81l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 0 1 1.06 0Z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
            <h1 className='mb-1 text-base font-semibold'>Edit Review</h1>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='my-8'>
            <div className=''>
              <label
                htmlFor='content'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Content
              </label>
              <textarea
                autoComplete='off'
                disabled={isLoading}
                rows={6}
                spellCheck='false'
                placeholder='Write something . . .'
                name='content'
                id='content'
                onChange={handleInput}
                value={input.content}
                className='w-full p-2 mt-2 text-xs font-medium tracking-wide border-dashed rounded-md resize-none text-slate-500 placeholder:text-slate-400 focus:border-orange-400 focus:ring-0 md:p-4 md:text-sm border-slate-400'
              ></textarea>
            </div>
            <button
              disabled={isLoading}
              type='submit'
              className='px-6 py-3 mt-12 text-xs font-medium tracking-wider text-center text-white bg-orange-500 rounded-md hover:bg-orange-600'
            >
              {isLoading ? 'Loading' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ReviewForm;
