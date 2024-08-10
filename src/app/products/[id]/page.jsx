'use client';
import MainLayout from '@/components/MainLayout';
import ReviewProductSection from '@/components/reviews/ReviewProductSection';
import { useState } from 'react';

const productDetailPage = () => {
  const [imageUrl, setImageUrl] = useState(false);

  const changeImage = (e) => {
    setImageUrl(e.target.src);
  };

  return (
    <MainLayout>
      <section
        id='productDetail'
        className='mx-auto max-w-[1320px] overflow-hidden my-8 px-10 xl:px-0'
      >
        <section className='grid grid-cols-5 gap-4 xl:grid-cols-10'>
          <section className='col-span-10 xl:col-span-7'>
            <div className='relative xl:h-96 lg:h-96 bg-slate-200'>
              <img
                className='object-contain w-full h-full'
                src={
                  imageUrl ||
                  'https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/5e593fb060cf8738ec75ea77_escape-1%402x.jpg'
                }
                alt=''
              />
              <button className='absolute left-0 top-[50%]  bg-[#EB8426] hover:bg-[#EB6D20] px-3 py-1 text-white text-lg font-bold'>
                &lt;
              </button>
              <button className='absolute right-0 top-[50%]  bg-[#EB8426] hover:bg-[#EB6D20] px-3 py-1 text-white text-lg font-bold'>
                &gt;
              </button>
            </div>

            <div className='flex flex-row h-20 gap-3 p-1 mt-4 overflow-x-auto border-4 bg-slate-200'>
              <img
                onClick={(e) => changeImage(e)}
                src='https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/5e5dde3f3f2bf99cb1d21f4d_58531d7356ce728d0ed6031d_escape-2%25402x-p-1080.jpeg'
                alt=''
                className='flex-none object-cover h-full duration-100 bg-black w-14 hover:opacity-50'
              />
              <img
                onClick={(e) => changeImage(e)}
                src='https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/5e5dde3f3f2bf9608bd21f4c_58531d7356ce728d0ed60505_escape-p-1080.jpeg'
                alt=''
                className='flex-none object-cover h-full duration-100 bg-slate-600 w-14 hover:opacity-50'
              />
              <img
                onClick={(e) => changeImage(e)}
                src='https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/5e5dde3f3f2bf93605d21f4a_58531d7356ce728d0ed60390_escape-4%25402x-p-1080.jpeg'
                alt=''
                className='flex-none object-cover h-full duration-100 bg-slate-600 w-14 hover:opacity-50'
              />
              <img
                onClick={(e) => changeImage(e)}
                src='https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/5e5dde3f3f2bf97919d21f4b_58531d7356ce728d0ed602e9_escape-5%25402x-p-1080.jpeg'
                alt=''
                className='flex-none object-cover h-full duration-100 bg-slate-600 w-14 hover:opacity-50'
              />
            </div>
          </section>

          <section className='col-span-10 p-3 shadow-lg xl:col-span-3'>
            <div>
              <h1 className='text-xl font-semibold text-slate-700'>
                Custom Website Design
              </h1>
              <p className='mt-1 text-sm text-slate-600'>
                By <span className='text-[#EB6D20]'>Rikkriuk</span>
              </p>
              <p className='py-5 text-sm'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                minima explicabo libero. Exercitationem eligendi totam eos
                voluptates asperiores aliquam aperiam, nesciunt quis accusamus.
                Nulla ipsa beatae doloribus necessitatibus nisi aliquid?
              </p>
            </div>
            <div className='flex flex-wrap gap-3'>
              <p className='px-4 py-3 text-sm text-white rounded-full bg-slate-500'>
                Website Development
              </p>
              <p className='px-4 py-3 text-sm text-white rounded-full bg-slate-500'>
                Golang
              </p>
              <p className='px-4 py-3 text-sm text-white rounded-full bg-slate-500'>
                NextJS
              </p>
              <p className='px-4 py-3 text-sm text-white rounded-full bg-slate-500'>
                ReatJS
              </p>
            </div>

            <div className='flex items-center justify-end gap-3 mt-10'>
              <p className='text-sm font-normal line-through text-slate-600'>
                Rp 350.000
              </p>
              <p className='text-xl font-semibold'>Rp 150.000</p>
            </div>

            <div className='flex justify-end mt-5'>
              <button className='py-3 px-7  bg-[#EB8426] hover:bg-[#EB6D20] text-white rounded-full'>
                Buy
              </button>
            </div>
          </section>
        </section>

        <ReviewProductSection />

        <section className='w-full'>
          <h1 className='my-16 text-xl font-semibold text-center text-slate-700'>
            Other Template
          </h1>
          <section className='relative flex flex-wrap justify-center w-full gap-3 lg:justify-start'>
            <div className='w-80 h-80 bg-slate-200'></div>
            <div className='w-80 h-80 bg-slate-200'></div>
            <div className='w-80 h-80 bg-slate-200'></div>
            <div className='w-80 h-80 bg-slate-200'></div>
          </section>

          <div className='w-full text-center'>
            <button className='my-10 bg-[#EB8426] hover:bg-[#EB6D20] px-7 py-3 text-white text-sm font-medium rounded-full'>
              View More
            </button>
          </div>
        </section>
      </section>
    </MainLayout>
  );
};

export default productDetailPage;
