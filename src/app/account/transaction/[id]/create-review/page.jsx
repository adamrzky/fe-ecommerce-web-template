'use client';

import ReviewForm from '@/components/reviews/ReviewForm';
import { useTrxStore } from '@/store/trxStore';
import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';

const { default: Menu } = require('@/components/account/Menu');
const { default: MainLayout } = require('@/components/MainLayout');

const CreateRewiew = () => {
  const { trx } = useTrxStore((state) => state);
  const [transaction, setTransaction] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (trx) {
      setTransaction(trx);
    } else {
      console.log('tidak ada trx data');
    }
  }, [trx]);
  return (
    <MainLayout>
      <section className='mx-auto max-w-[1320px] my-8 px-10 xl:px-0 flex flex-col xl:flex-row'>
        <Menu />
        <div className='w-full p-2 rounded-md'>
          {isLoading ? (
            <Skeleton count={4} className='mt-3' />
          ) : (
            <ReviewForm transaction={transaction} />
          )}
        </div>
      </section>
    </MainLayout>
  );
};

export default CreateRewiew;
