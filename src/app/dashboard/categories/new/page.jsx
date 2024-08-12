'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import baseUrl from '@/utils/constains';
import { useAuthStore } from '@/store/authStore';
import Link from 'next/link';

const NewCategoryPage = () => {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const { user } = useAuthStore();
  const token = user?.token;
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch(`${baseUrl}/category`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name }),
      });

      router.push('/dashboard/categories');
    } catch (error) {
      console.error('Error adding category:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='container px-4 pt-6 mx-auto lg:px-8 lg:pt-8 xl:max-w-7xl'>
      <h1 className='text-lg font-semibold'>Add New Category</h1>
      <form onSubmit={handleSubmit} className='mt-4 shadow-lg p-4 mx-auto lg:p-8'>
        <div className='mb-4'>
          <label htmlFor='name' className='font-semibold text-slate-600'>
            Category Name
          </label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='block w-full lg:w-1/3 px-3 py-2 border mt-6 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm'
            required
            placeholder='Product name'
          />
        </div>
        <div className='flex gap-3'>
          <Link href="/dashboard/categories">
            <span className='inline-flex items-center gap-2 px-4 py-2 text-sm font-medium leading-5 text-white bg-slate-600 rounded-md hover:bg-slate-700'>
              Back
            </span>
          </Link>
          <button
            type='submit'
            disabled={loading}
            className='inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
          >
            {loading ? 'Saving...' : 'Save'}
          </button>

        </div>
      </form>
    </div>
  );
};

export default NewCategoryPage;
