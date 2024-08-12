'use client';

import { useState, useEffect } from 'react';
import CategoryTable from '@/components/categories/CategoryTable';
import { useAuthStore } from '@/store/authStore';
import baseUrl from '@/utils/constains';
import Link from 'next/link';

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuthStore();
  const token = user?.token;

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        let result = await fetch(`${baseUrl}/category`, {
          cache: 'no-store',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!result.ok) {
          throw new Error('Network response was not ok');
        }

        let data = await result.json();
        setCategories(data.data);
      } catch (error) {
        console.log('error fetching categories');
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, [token]);

  return (
    <section>
      <div className='container px-4 pt-6 mx-auto lg:px-8 lg:pt-8 xl:max-w-7xl'>
        <div className='flex flex-col gap-2 text-center sm:flex-row sm:items-center sm:justify-between sm:text-start'>
          <div className='grow'>
            <h1 className='mb-1 text-lg font-semibold'>Categories</h1>
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
              <Link href="/dashboard/categories/new">
                <span className='inline-flex items-center gap-2 px-4 py-2 text-sm font-medium leading-5 text-white bg-blue-600 rounded-md hover:bg-blue-700'>
                    Add New Category
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='container p-4 mx-auto lg:p-8 xl:max-w-7xl'>
        <CategoryTable categories={categories} loading={loading} />
      </div>
    </section>
  );
}
