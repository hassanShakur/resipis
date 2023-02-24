import React from 'react';
import CustomSkeleton from '../UI/CustomSkeleton';

const Timing = ({ isLoading }) => {
  return isLoading ? (
    <CustomSkeleton />
  ) : (
    <div className='timing'>
      <div className='prep'>
        <h3>prep time:</h3>
        <p>10 mins</p>
      </div>
      <div className='cook'>
        <h3>cook time:</h3>
        <p>10 mins</p>
      </div>
      <div className='addition'>
        <h3>addition time:</h3>
        <p>10 mins</p>
      </div>
      <div className='total'>
        <h3>total time:</h3>
        <p>10 mins</p>
      </div>
      <div className='servings'>
        <h3>servings:</h3>
        <p>10</p>
      </div>
    </div>
  );
};

export default Timing;
