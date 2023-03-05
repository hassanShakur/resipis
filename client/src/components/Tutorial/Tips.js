// * ======= Third Party Components ======= */
import React from 'react';

//? ======== Local Components ========== */
import CustomSkeleton from '../UI/CustomSkeleton';

const Tips = ({ isLoading }) => {
  return isLoading ? (
    <CustomSkeleton />
  ) : (
    <div className='tips'>
      <h3>Tips</h3>
    </div>
  );
};

export default Tips;
