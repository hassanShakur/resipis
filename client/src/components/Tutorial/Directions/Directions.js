//? ======== Local Components ========== */
import React from 'react';
import _ from 'lodash';

//? ======== Local Components ========== */
import CustomSkeleton from '../../UI/CustomSkeleton';
import Step from './Step';

const Directions = ({ instructions, isLoading }) => {
  return isLoading ? (
    <CustomSkeleton />
  ) : (
    <div className='directions'>
      <h2>Directions</h2>
      <div className='steps'>
        {instructions?.map((instruction) => {
          return (
            <Step
              key={instruction.number}
              step={instruction}
              isLoading={isLoading}
            />
          );
        })}
        {_.range(6).map((_, id) => {
          return <Step key={id} />;
        })}
      </div>
    </div>
  );
};

export default Directions;
