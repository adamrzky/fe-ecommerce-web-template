'use client';

import Menu from '@/components/account/Menu';
import MainLayout from '@/components/MainLayout';
import ReviewForm from '@/components/reviews/ReviewForm';
import { useParams } from 'next/navigation';

const EditReviewPage = () => {
  const { id } = useParams();
  return (
    <MainLayout>
      <section
        className='mx-auto max-w-[1320px] my-8 px-10 xl:px-0 flex flex-col xl:flex-row'
        id='edit-review'
      >
        <Menu />
        <ReviewForm id={id} />
      </section>
    </MainLayout>
  );
};

export default EditReviewPage;
