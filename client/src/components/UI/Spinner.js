import React from 'react';
import { FadeLoader } from 'react-spinners';

const Spinner = () => {
  return (
    <div className='spinner-div'>
      <FadeLoader
        id='spinner'
        color='#2aa10f'
        speedMultiplier={2.4}
      />
    </div>
  );
};

export default Spinner;
