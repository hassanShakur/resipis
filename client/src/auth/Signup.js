import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Authentication from './Authentication';
import { BsPerson } from 'react-icons/bs';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { BiLockOpen, BiMailSend } from 'react-icons/bi';
import useAuth from '../hooks/useAuth';
import useHttpClient from '../hooks/useHttpClient';
import ImageUpload from './ImageUpload';
import Spinner from '../components/UI/Spinner';

const Signup = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState();

  const { state, handlers } = useAuth('signup');
  const { name, email, password, passwordConfirm, formIsValid } =
    state;
  const {
    nameChangeHandler,
    emailChangeHandler,
    passwordChangeHandler,
    passwordConfirmChangeHandler,
  } = handlers;

  const handleLoginNavigation = () => {
    navigate('/login');
  };

  const data = {
    name,
    email,
    password,
    passwordConfirm,
    avatar: file,
  };

  const { sendRequest, isLoading, error } = useHttpClient(
    'users/signup',
    'post',
    data,
    formIsValid
  );

  const signupClickHandler = async (e) => {
    e.preventDefault();
    await sendRequest().catch((err) => console.log(err));
  };

  return (
    <Authentication type='signup'>
      <form onSubmit={signupClickHandler}>
        {isLoading && <Spinner />}
        <div className='greet'>
          <h4>sign up</h4>
          <p>{error}</p>
        </div>
        <div className='inputs'>
          <label htmlFor='email'>name</label>
          <div className='name'>
            <BsPerson className='icon' />
            <input
              type='text'
              name='name'
              id='name'
              placeholder='yuqee chen'
              value={name}
              onChange={nameChangeHandler}
            />
          </div>

          <label htmlFor='email'>email address</label>
          <div className='email'>
            <BiMailSend className='icon' />
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
          <label htmlFor='passwordConfirm'>confirm password</label>
          <div className='password'>
            <AiOutlineCheckCircle className='icon' />
            <input
              type='password'
              name='passwordConfirm'
              id='passwordConfirm'
              placeholder='Confirmation'
              value={passwordConfirm}
              onChange={passwordConfirmChangeHandler}
            />
          </div>
          <label htmlFor='avatar'>Avatar</label>
          <ImageUpload setFile={setFile} file={file} />
        </div>

        <div className='buttons'>
          <button
            type='submit'
            className='submit-btn'
            disabled={!formIsValid || !file}
          >
            sign up
          </button>
          <div className='or'>
            <hr />
            <span>or</span>
            <hr />
          </div>

          <button
            className='option-btn'
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
