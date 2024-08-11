'use client';

import { useState, useEffect } from 'react';
import CategoryTable from '@/components/categories/CategoryTable';
import Skeleton from 'react-loading-skeleton';
import { useAuthStore } from '@/store/authStore';
import baseUrl from '@/utils/constains';

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

  if (loading) {
    return (
      <div className='container px-4 pt-6 mx-auto lg:px-8 lg:pt-8 xl:max-w-7xl'>
        <Skeleton count={5} className='mt-6' />
      </div>
    );
  }

  return (
    <div className='p-10 mx-auto my-10 max-w-7xl'>
      <CategoryTable categories={categories} />
    </div>
  );
}
