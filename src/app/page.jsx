"use client";
import MainLayout from '@/components/MainLayout';
import Banner from '@/components/Banner';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import baseUrl from '@/utils/constains';
import ProductCard from '@/components/ProductCard';

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
          className='mx-auto max-w-[1320px] my-8 px-10 xl:px-0 bg-slate-500'
        >
          <Banner/>
        </section>
        {/* <section
          id='hero'
          className='mx-auto max-w-[1320px] my-8 px-10 xl:px-0'
        >
          <div className='bg-slate-300 md:h-[450px] h-80 rounded-md p-4'></div>
        </section> */}
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
                <p>Loading...</p>
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
        {/* <section
          id='subscribe'
          className='mx-auto max-w-[1320px] my-8 px-10 xl:px-0'
        >
          <div className='bg-[#5959D9] rounded-md px-4 py-4'>
            <div className='flex flex-col md:pt-10 md:pl-[112px] pl-4 max-w-[670px]'>
              <p className='text-sm font-medium text-white md:text-lg'>Yes!</p>
              <p className='text-xs font-medium text-white md:text-lg'>
                Send me exclusive offers, unique gift ideas, and personalized
                tips for shopping and selling on Commerce.
              </p>
            </div>
            <div className='flex items-center justify-center mt-6 md:mt-12'>
              <div className='flex items-center mx-auto md:max-w-[650px] w-full bg-white rounded-full py-4 px-6'>
                <input
                  placeholder='Drop your email...'
                  type='text'
                  className='w-full text-xs border-0 outline-none md:text-sm text-slate-500 focus:outline-none focus:ring-0'
                />
                <a
                  href='#'
                  className='hidden md:flex items-center gap-x-2 bg-[#EB8426] rounded-full py-2 px-7'
                >
                  <p className='text-xs font-medium text-white md:text-sm'>
                    Subscribe
                  </p>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='#fff'
                    className='size-4'
                  >
                    <path
                      fillRule='evenodd'
                      d='M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z'
                      clipRule='evenodd'
                    />
                  </svg>
                </a>
              </div>
            </div>
            <a
              href='#'
              className='flex items-center gap-x-2 bg-[#EB8426] rounded-full py-2 px-7 mt-4 md:hidden justify-center'
            >
              <p className='text-xs font-medium text-white md:text-sm'>
                Subscribe
              </p>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='#fff'
                className='size-4'
              >
                <path
                  fillRule='evenodd'
                  d='M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z'
                  clipRule='evenodd'
                />
              </svg>
            </a>
            <div className='flex mt-4 text-center'>
              <a
                href='#'
                className='md:text-sm text-xs text-[#D6D6D6] mx-auto underline underline-offset-2'
              >
                First order only. You’re ready?
              </a>
            </div>
          </div>
        </section> */}
        {/* <section>
          <div className='mx-auto max-w-[1920px] my-8 px-10 xl:px-0 bg-[#F5F6F8]'>
            <div className='flex items-center py-4'>
              <p className='mx-auto text-xs font-medium text-center md:text-sm'>
                Commerce, is powered by 100% renewable electricity.
              </p>
            </div>
          </div>
        </section> */}
      </MainLayout>
    </>
  );
}
