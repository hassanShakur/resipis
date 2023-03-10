import React from 'react';

import Logo from '../components/UI/Logo';
import Themer from '../components/Header/Themer';

const Authentication = ({ children }) => {
  return (
    <div className='auth'>
      <header>
        <Logo />
        <Themer />
      </header>
      {children}
    </div>
  );
};

export default Authentication;
