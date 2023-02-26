import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './../../images/resipis-logo.png';

const Logo = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <div className='logo' onClick={goHome}>
      <img src={logo} alt='Resipis Logo' />
      <h3>Resipis</h3>
    </div>
  );
};

export default Logo;
