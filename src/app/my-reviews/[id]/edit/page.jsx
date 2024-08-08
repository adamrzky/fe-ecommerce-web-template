'use client';

import ReviewForm from '@/components/reviews/ReviewForm';
import { useParams } from 'next/navigation';

const EditReviewPage = () => {
  const { id } = useParams();
  return <ReviewForm id={id} />;
};

export default EditReviewPage;
