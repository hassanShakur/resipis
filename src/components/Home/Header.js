import React from 'react';
import logo from './../../images/resipis-logo.png';
const Header = () => {
  return (
    <header className='hero-header'>
      <div className='logo'>
        <img src={logo} alt='Resipis Logo' />
        <h3>Resipis</h3>
      </div>
    </header>
  );
};

export default Header;
