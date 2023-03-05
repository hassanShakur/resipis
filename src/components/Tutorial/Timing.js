// * ======= Third Party Components ======= */
import React from 'react';

//? ======== Local Components ========== */
import CustomSkeleton from '../UI/CustomSkeleton';

const Timing = ({ isLoading, times }) => {
  let { prepTime, cookTime, servings } = times;
  prepTime = prepTime === -1 ? 0 : prepTime;
  cookTime = cookTime === -1 ? 0 : cookTime;

  return isLoading ? (
    <CustomSkeleton />
  ) : (
    <div className='timing'>
      <div className='prep'>
        <h3>prep time:</h3>
        <p>{prepTime} mins</p>
      </div>
      <div className='cook'>
        <h3>cook time:</h3>
        <p>{cookTime} mins</p>
      </div>
      <div className='addition'>
        <h3>addition time:</h3>
        <p>5 mins</p>
      </div>
      <div className='total'>
        <h3>total time:</h3>
        <p>{cookTime + prepTime + 5} mins</p>
      </div>
      <div className='servings'>
        <h3>servings:</h3>
        <p>{servings} people</p>
      </div>
    </div>
  );
};

export default Timing;
