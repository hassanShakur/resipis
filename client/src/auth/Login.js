import React from 'react';
import { useNavigate } from 'react-router-dom';
import Authentication from './Authentication';

const Login = () => {
  const navigate = useNavigate();
  const handleSignUpNavigation = () => {
    navigate('/signup');
  };

  return (
    <Authentication type='login'>
      <div className='buttons'>
        <button type='submit' className='submit-btn'>
          login
        </button>
        <div className='or'>
          <hr />
          <span>or</span>
          <hr />
        </div>

        <button
          className='signup-btn'
          type='button'
          onClick={handleSignUpNavigation}
        >
          sign up
        </button>
      </div>
    </Authentication>
  );
};

export default Login;
