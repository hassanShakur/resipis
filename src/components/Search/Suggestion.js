import React from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';

const Suggestion = () => {
  return (
    <div className='suggestion'>
      <div className='img'></div>
      <div className='description'>
        <h5 className='name'>item name</h5>
        <span className='time'>
          <AiOutlineClockCircle />
          <h5>30 mins</h5>
        </span>
      </div>
    </div>
  );
};

export default Suggestion;
