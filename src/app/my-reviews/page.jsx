'use client';

import { useState, useEffect } from 'react';
import ReviewTable from '@/components/reviews/ReviewTable';
import Skeleton from 'react-loading-skeleton';
import { useAuthStore } from '@/store/authStore';
import baseUrl from '@/utils/constains';

const ReviewPage = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuthStore();
  const token = user?.token;

  useEffect(() => {
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
  }, [token]);

  if (loading) {
    return (
      <div className='container px-4 pt-6 mx-auto lg:px-8 lg:pt-8 xl:max-w-7xl'>
        <Skeleton count={5} className='mt-6' />;
      </div>
    );
  }

  return <ReviewTable reviews={reviews} />;
};

export default ReviewPage;
