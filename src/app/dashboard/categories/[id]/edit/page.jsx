'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import baseUrl from '@/utils/constains';
import { useAuthStore } from '@/store/authStore';

const EditCategoryPage = ({ params }) => {
  const { id } = params;
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const { user } = useAuthStore();
  const token = user?.token;
  const router = useRouter();

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        let result = await fetch(`${baseUrl}/category/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!result.ok) {
          throw new Error('Network response was not ok');
        }

        let data = await result.json();
        setName(data.data.name);
      } catch (error) {
        console.error('Error fetching category:', error);
      }
    };

    fetchCategory();
  }, [id, token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch(`${baseUrl}/category/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name }),
      });

      router.push('/dashboard/categories');
    } catch (error) {
      console.error('Error updating category:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='container px-4 pt-6 mx-auto lg:px-8 lg:pt-8 xl:max-w-7xl'>
      <h1 className='text-lg font-semibold'>Edit Category</h1>
      <form onSubmit={handleSubmit} className='mt-4'>
        <div className='mb-4'>
          <label htmlFor='name' className='block text-sm font-medium text-gray-700'>
            Category Name
          </label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm'
            required
          />
        </div>
        <button
          type='submit'
          disabled={loading}
          className='inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
        >
          {loading ? 'Saving...' : 'Save'}
        </button>
      </form>
    </div>
  );
};

export default EditCategoryPage;
