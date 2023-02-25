import React from 'react';

import {
  TbArrowBigRightLines,
  TbArrowBigRight,
  TbArrowBigLeftLines,
  TbArrowBigLeft,
} from 'react-icons/tb';

const Pagination = () => {
  return (
    <div className='pagination'>
      <TbArrowBigLeftLines className='icon left' title='Start' />
      <TbArrowBigLeft className='icon left' title='Prev' />
      <button className='page-num'>1</button>
      <TbArrowBigRight className='icon right' title='Next' />
      <TbArrowBigRightLines className='icon right' title='End' />
    </div>
  );
};

export default Pagination;
