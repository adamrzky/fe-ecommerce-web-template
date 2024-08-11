"use client";

import MainLayout from '@/components/MainLayout';
import ProductCard from '@/components/ProductCard';
import baseUrl from '@/utils/constains';
import { Button, Label, TextInput } from 'flowbite-react';
import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function CategoryDetailPage({ params }) {
  const { id } = params;
  const router = useRouter();
  const searchParams = useSearchParams();

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const searchQuery = searchParams.get("searchQuery") || "";
  const minPrice = searchParams.get("minPrice") || "";
  const maxPrice = searchParams.get("maxPrice") || "";

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const categoryResponse = await axios.get(`${baseUrl}/category/${id}`);
        setCategory(categoryResponse.data.data);

        const productResponse = await axios.get(`${baseUrl}/product`, {
          params: {
            category: id,
            productName: searchQuery,
            minPrice,
            maxPrice,
          },
        });

        
        setProducts(productResponse.data.data || []);
      } catch (err) {
        setError(err.message);
        setProducts([]); 
      } finally {
        setLoading(false);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${baseUrl}/category`);
        setCategories(response.data.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchCategory();
    fetchCategories();
  }, [id, searchQuery, minPrice, maxPrice]);

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const queryParams = {
      searchQuery: form.get("searchQuery"),
      minPrice: form.get("minPrice"),
      maxPrice: form.get("maxPrice"),
    };

    const queryString = Object.entries(queryParams)
      .filter(([_, value]) => value)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");

    router.push(`/categories/${id}?${queryString}`);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <MainLayout>
      <section className='mx-auto max-w-[1320px] my-8 px-10 xl:px-0'>
        <h1 className='mb-4 text-2xl font-bold'>{category?.name || "Category"}</h1>
        <div className='flex flex-row gap-4'>
          <div className='pr-4 basis-1/3'>
            <form onSubmit={handleFilterSubmit} className="flex flex-col gap-4">
              <div className="max-w-md">
                <div className="block mb-2">
                  <Label htmlFor="searchQuery" value="Search Products" />
                </div>
                <TextInput
                  id="searchQuery"
                  name="searchQuery"
                  type="text"
                  defaultValue={searchQuery}
                  placeholder="Search products..."
                />
              </div>

              <div className="flex flex-col gap-4">
                <div className="max-w-md">
                  <div className="block mb-2">
                    <Label htmlFor="minPrice" value="Min Price" />
                  </div>
                  <TextInput
                    id="minPrice"
                    name="minPrice"
                    type="number"
                    defaultValue={minPrice}
                    placeholder="0"
                  />
                </div>
                <div className="max-w-md">
                  <div className="block mb-2">
                    <Label htmlFor="maxPrice" value="Max Price" />
                  </div>
                  <TextInput
                    id="maxPrice"
                    name="maxPrice"
                    type="number"
                    defaultValue={maxPrice}
                    placeholder="0"
                  />
                </div>
              </div>

              <Button style={{ backgroundColor: '#EB8426', color: 'white' }} pill type="submit">Apply</Button>
            </form>
          </div>

          {products.length > 0 ? (
            <div className='basis-2/3'>
              <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 2xl:gap-5'>
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          ) : (
            <div className='basis-2/3'>
              <p>No products found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
}
