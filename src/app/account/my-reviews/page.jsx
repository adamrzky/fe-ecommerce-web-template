'use client';

import Menu from '@/components/account/Menu';
import MainLayout from '@/components/MainLayout';
import ReviewTable from '@/components/reviews/ReviewTable';
import { useAuthStore } from '@/store/authStore';
import useMenuStore from '@/store/menuStore';
import baseUrl from '@/utils/constains';
import { useEffect, useRef, useState } from 'react';
import Skeleton from 'react-loading-skeleton';

const MyReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuthStore();
  const token = user?.token;
  const { setActiveMenu } = useMenuStore();

  useEffect(() => {
    setActiveMenu('my-reviews');
    const fetchMyReviews = async () => {
      try {
        let result = await fetch(`${baseUrl}/my-reviews`, {
          cache: 'no-store',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!result.ok) {
          throw new Error('Network response was not ok');
        }

        let data = await result.json();
        setReviews(data.data);
      } catch (error) {
        console.log('error idins');
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMyReviews();
  }, [token, setActiveMenu]);

  return (
    <MainLayout>
      <section
        id='account'
        className='mx-auto max-w-[1320px] my-8 px-10 xl:px-0 flex flex-col xl:flex-row'
      >
        <Menu />
        <div className='w-full p-2 rounded-md'>
          {loading ? (
            <div className='container px-4 pt-6 mx-auto lg:px-8 lg:pt-8 xl:max-w-7xl'>
              <Skeleton count={5} className='mt-6' />;
            </div>
          ) : (
            <ReviewTable reviews={reviews} />
          )}
        </div>
      </section>
    </MainLayout>
  );
};

export default MyReviewsPage;
