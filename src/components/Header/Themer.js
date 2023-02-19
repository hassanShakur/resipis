import React from 'react';

import {
  MdOutlineLightMode,
  MdOutlineDarkMode,
} from 'react-icons/md';

const Themer = () => {
  return (
    <button type='button' className='themer'>
      <MdOutlineDarkMode className='icon' />
      <MdOutlineLightMode className='icon' />
      <span></span>
    </button>
  );
};

export default Themer;
