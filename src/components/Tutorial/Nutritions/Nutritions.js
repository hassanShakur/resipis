import React from 'react';
import CustomSkeleton from '../../UI/CustomSkeleton';

const Nutrition = ({ isLoading }) => {
  return isLoading ? (
    <CustomSkeleton />
  ) : (
    <div className='nutrition'>
      <h3>Nutrition facts</h3>
      {/* <span>
        <p>per serving</p>
      </span> */}
      <div className='details'>
        <div>
          <h4>45</h4>
          <p>calories</p>
        </div>
        <div>
          <h4>6g</h4>
          <p>fat</p>
        </div>
        <div>
          <h4>18g</h4>
          <p>carbs</p>
        </div>
        <div>
          <h4>1g</h4>
          <p>protein</p>
        </div>
      </div>
    </div>
  );
};

export default Nutrition;
