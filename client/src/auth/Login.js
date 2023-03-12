import React from 'react';
import { useNavigate } from 'react-router-dom';
import Authentication from './Authentication';
import { BsPerson } from 'react-icons/bs';
import { BiLockOpen } from 'react-icons/bi';
import useAuth from '../hooks/useAuth';
import useHttpClient from '../hooks/useHttpClient';
import Spinner from '../components/UI/Spinner';

const Login = () => {
  const navigate = useNavigate();
  const { state, handlers } = useAuth('login');
  const { email, password, formIsValid } = state;
  const { emailChangeHandler, passwordChangeHandler } = handlers;

  const handleSignUpNavigation = () => {
    navigate('/signup');
  };

  const data = { email, password };

  const { sendRequest, isLoading, error } = useHttpClient(
    'users/login',
    'post',
    data,
    formIsValid
  );

  const loginClickHandler = async (e) => {
    e.preventDefault();
    await sendRequest().catch((err) => console.log(err));
  };

  return (
    <Authentication type='login'>
      <form onSubmit={loginClickHandler}>
        {isLoading && <Spinner />}
        <div className='greet'>
          <h4>welcome back</h4>
          <p>{error}</p>
        </div>
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
            className='option-btn'
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
