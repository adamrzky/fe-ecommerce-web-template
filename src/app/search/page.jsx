"use client";

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import MainLayout from '@/components/MainLayout';
import baseUrl from '@/utils/constains';
import ProductCard from '@/components/ProductCard';

const SearchResults = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.get(`${baseUrl}/product?productName=${query}`);
        const data = response.data.data;
        setResults(Array.isArray(data) ? data : []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchResults();
    } else {
      setLoading(false);
    }
  }, [query]);

  if (loading) return (<><MainLayout><p>Loading...</p></MainLayout></>);
  if (error) return (<><MainLayout><p>Error: {error}</p></MainLayout></>);

  return (
    <MainLayout>
      <>
        <h1 className='my-2'>Search Results for: {query}</h1>
        {results.length > 0 ? (
          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-3 2xl:gap-5">
            {results.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p>No results found</p>
        )}
      </>
    </MainLayout>
  );
};

export default SearchResults;
