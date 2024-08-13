"use client";
import MainLayout from '@/components/MainLayout';
import Banner from '@/components/Banner';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import baseUrl from '@/utils/constains';
import ProductCard from '@/components/ProductCard';
import Skeleton from 'react-loading-skeleton';

export default function Home() {
  const router = useRouter();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.get(`${baseUrl}/product`, {
        });
        const data = response.data.data;
        setResults(Array.isArray(data) ? data : []);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false); 
      }
    };

    fetchResults();
  }, []);

  const HandleToProducts = () => {
    router.push("/products");
  };
  return (
    <>
      <MainLayout>
        <section
          id='banner'
          className='mx-auto max-w-[1320px] my-8 px-10 xl:px-0'
        >
          <Banner/>
        </section>
        <section
          id='product'
          className='mx-auto max-w-[1320px] my-8 px-10 xl:px-0'
        >
          <div className=''>
            <p className='text-[#3E3E3E] md:text-lg text-sm font-medium mb-2'>
            Product Templates.
            </p>
            <p className='text-[#9A9A9A] md:text-sm text-xs font-medium'>
            Find Your Perfect Template.
            </p>
            {loading ? ( 
              <div className='basis-3/4'>
                <Skeleton count={5} className='mt-6' />;
              </div>
            ) : results.length > 0 ? ( 
              <div className='basis-3/4'>
                <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 2xl:gap-5'>
                  {results.slice(0, 6).map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            ) : ( 
              <div className='basis-3/4'>
                <p>No results found</p>
              </div>
            )}
            <div className="w-full text-center">
              <button className="my-10 bg-[#EB8426] hover:bg-[#EB6D20] px-7 py-3 text-white text-sm font-medium rounded-full" onClick={HandleToProducts} >
                View More
              </button>
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  );
}
