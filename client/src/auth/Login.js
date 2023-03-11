import React from 'react';
import { useNavigate } from 'react-router-dom';
import Authentication from './Authentication';
import { BsPerson } from 'react-icons/bs';
import { BiLockOpen } from 'react-icons/bi';
import axios from 'axios';
import useAuth from '../hooks/useAuth';

const Login = () => {
  const navigate = useNavigate();
  const { state, handlers } = useAuth('login');
  const { email, password, formIsValid } = state;
  const { emailChangeHandler, passwordChangeHandler } = handlers;

  const handleSignUpNavigation = () => {
    navigate('/signup');
  };

  const loginClickHandler = async (e) => {
    e.preventDefault();
    if (!formIsValid) return;
    try {
      const res = await axios.post(
        'http://localhost:7000/api/users/login',
        {
          email,
          password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(res);
    } catch (err) {
      console.log(err.response.data.message);
    }
  };

  return (
    <Authentication type='login'>
      <form onSubmit={loginClickHandler}>
        <h4>welcome back</h4>
        <div className='inputs'>
          <label htmlFor='email'>email address</label>
          <div className='email'>
            <BsPerson className='icon' />
            <input
              type='email'
              name='email'
              id='email'
              placeholder='example@email.com'
              value={email}
              onChange={emailChangeHandler}
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
              value={password}
              onChange={passwordChangeHandler}
            />
          </div>
        </div>

        <div className='buttons'>
          <button
            type='submit'
            className='submit-btn'
            disabled={!formIsValid}
          >
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
        <div className='footer'>
          <p>Resipis.inc</p>
        </div>
      </form>
    </Authentication>
  );
};

export default Login;
