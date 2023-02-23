import React from 'react';

const Step = ({ step }) => {
  if (step) {
    const { desc, number } = step;
    return (
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
