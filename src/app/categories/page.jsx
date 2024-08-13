"use client";

import MainLayout from '@/components/MainLayout';
import CategoryCard from '@/components/CategoryCard'; 
import axios from 'axios';
import { useState, useEffect } from 'react';
import baseUrl from '@/utils/constains';
import Skeleton from 'react-loading-skeleton';

export default function CategoryPage() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${baseUrl}/category`);
        const data = response.data.data;
        setCategories(Array.isArray(data) ? data : []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading)
    return (
      <MainLayout>
        <section className="mx-auto max-w-[1320px] my-8 px-10 xl:px-0">
          <Skeleton count={5} className='mt-6' />
        </section>
      </MainLayout>
    );

  if (error)
    return (
      <MainLayout>
        <section className="mx-auto max-w-[1320px] my-8 px-10 xl:px-0">
          <p>Error: {error}</p>
        </section>
      </MainLayout>
    );

  return (
    <MainLayout>
      <section className='mx-auto max-w-[1320px] my-8 px-10 xl:px-0'>
      <p className='mb-8 text-lg font-medium tracking-wide text-slate-800'>
          All Categories
        </p>
        <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 2xl:gap-5'>
          {categories.length > 0 ? (
            categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))
          ) : (
            <p>No categories available</p>
          )}
        </div>
      </section>
    </MainLayout>
  );
}