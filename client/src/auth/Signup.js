import React from 'react';
import { useNavigate } from 'react-router-dom';
import Authentication from './Authentication';
import { BsPerson } from 'react-icons/bs';
import { BiLockOpen } from 'react-icons/bi';

const Signup = () => {
  const navigate = useNavigate();
  const handleLoginNavigation = () => {
    navigate('/login');
  };
  return (
    <Authentication type='signup'>
      <form>
        <h4>sign up</h4>
        <div className='inputs'>
          <label htmlFor='email'>name</label>
          <div className='name'>
            <BsPerson className='icon' />
            <input
              type='text'
              name='name'
              id='name'
              placeholder='yuqee chen'
            />
          </div>

          <label htmlFor='email'>email address</label>
          <div className='email'>
            <BsPerson className='icon' />
            <input
              type='email'
              name='email'
              id='email'
              placeholder='example@email.com'
            />
          </div>
          <label htmlFor='password'>password</label>
          <div className='password'>
            <BiLockOpen className='icon' />
            <input
              type='password'
              name='password'
              id='password'
              placeholder='Password'
            />
          </div>
        </div>

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
        <div className='footer'>
          <p>Resipis.inc</p>
        </div>
      </form>
    </Authentication>
  );
};

export default Signup;
