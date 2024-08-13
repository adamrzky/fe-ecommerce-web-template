"use client";

import MainLayout from '@/components/MainLayout';
import ProductCard from '@/components/ProductCard';
import { useSearchStore } from '@/store/searchStore';
import baseUrl from '@/utils/constains';
import axios from 'axios';
import { Button, Label, Select, TextInput } from 'flowbite-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';

export default function ProductPage() {
  const { searchQuery, minPrice, maxPrice, category, setMinPrice, setMaxPrice, setCategory } = useSearchStore();
  const router = useRouter();
  
  const [results, setResults] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.get(`${baseUrl}/product`, {
          params: {
            productName: searchQuery,
            minPrice,
            maxPrice,
            category
          }
        });
        const data = response.data.data;
        setResults(Array.isArray(data) ? data : []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${baseUrl}/category`);
        const data = response.data.data;
        setCategories(Array.isArray(data) ? data : []);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchResults();
    fetchCategories();
  }, [searchQuery, minPrice, maxPrice, category]);

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const queryParams = {
      name: searchQuery,
      minPrice: form.get("minPrice"),
      maxPrice: form.get("maxPrice"),
      category: form.get("category"),
    };

    setMinPrice(queryParams.minPrice);
    setMaxPrice(queryParams.maxPrice);
    setCategory(queryParams.category);

    const queryString = Object.entries(queryParams)
      .filter(([_, value]) => value)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");

    router.push(`?${queryString}`);
  };

  if (loading)
    return (
      <MainLayout>
        <section className="flex items-center justify-center h-screen">
            <ClipLoader color="#EB6D20" size={50} />
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
        <div className='flex-row flex gap-4'>
          <div className='basis-1/4 pr-4'>
            <form onSubmit={handleFilterSubmit} className="flex flex-col gap-4">
              <div className="max-w-md">
                <div className="mb-2 block">
                  <Label htmlFor="category" value="Select category" />
                </div>
                <Select id="category" name="category" defaultValue={category}>
                  <option value="">Select Category</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </Select>
              </div>

              <div className="flex flex-col gap-4">
                <div className="max-w-md">
                  <div className="mb-2 block">
                    <Label htmlFor="min-price" value="Min Price" />
                  </div>
                  <TextInput id="min-price" name="minPrice" type="number" defaultValue={minPrice} placeholder="0" />
                </div>
                <div className="max-w-md">
                  <div className="mb-2 block">
                    <Label htmlFor="max-price" value="Max Price" />
                  </div>
                  <TextInput id="max-price" name="maxPrice" type="number" defaultValue={maxPrice} placeholder="0" />
                </div>
              </div>

              <Button style={{ backgroundColor: '#EB8426', color: 'white' }} pill type="submit">Apply</Button>
            </form>
          </div>

          {results.length > 0 ? (
            <div className='basis-3/4'>
              <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 2xl:gap-5'>
                {results.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          ) : (
            <div className='basis-3/4'>
              <p>No results found</p>
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
}