import React from 'react';
import { useNavigate } from 'react-router-dom';
import Authentication from './Authentication';

const Signup = () => {
  const navigate = useNavigate();
  const handleLoginNavigation = () => {
    navigate('/login');
  };
  return (
    <Authentication type='signup'>
      <div className='buttons'>
        <button type='submit' className='submit-btn'>
          sign up
        </button>
        <div className='or'>
          <hr />
          <span>or</span>
          <hr />
        </div>

        <button
          className='signup-btn'
          type='button'
          onClick={handleLoginNavigation}
        >
          login
        </button>
      </div>
    </Authentication>
  );
};

export default Signup;
