import React from 'react';
import Step from './Step';

import _ from 'lodash';
import CustomSkeleton from '../../UI/CustomSkeleton';

const Directions = ({ instructions, isLoading }) => {
  // console.log(instructions);
  return isLoading ? (
    <CustomSkeleton />
  ) : (
    <div className='directions'>
      <h2>Directions</h2>
      <div className='steps'>
        {instructions?.map((instruction) => {
          return <Step key={instruction.number} step={instruction} />;
        })}
        {_.range(6).map((_, id) => {
          return <Step key={id} />;
        })}
      </div>

      <div className='btns'>
        <button type='button'>prev</button>
        <button type='button'>next</button>
      </div>
    </div>
  );
};

export default Directions;
