// * ======= Third Party Components ======= */
import React from 'react';

//? ======== Local Components ========== */
import CustomSkeleton from '../../UI/CustomSkeleton';

const Step = ({ step, isLoading }) => {
  if (step) {
    const { desc, number } = step;

    return isLoading ? (
      <CustomSkeleton />
    ) : (
      <div className='step'>
        <div className='header'>
          <span className='step-num'>step {number}</span>
          {/* <span className='step-time'>1:30</span> */}
        </div>
        <div className='content'>{desc}</div>
      </div>
    );
  } else {
    return '';
  }
};

export default Step;
