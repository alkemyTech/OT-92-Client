import React from 'react';
import Skeleton from './Skeleton';

const TestSkeleton = () => {
  return (
    <div className='container'>
      <Skeleton type='title' />
      <Skeleton type='text' />
      <Skeleton type='thumbnail' />
      <Skeleton type='avatar' />
    </div>
  );
};

export default TestSkeleton;
