import React from 'react';
import { BsPerson } from 'react-icons/bs';
import { BiLockOpen } from 'react-icons/bi';
import Logo from '../components/UI/Logo';
import Themer from '../components/Header/Themer';

const Authentication = ({ type, children }) => {
  return (
    <div className='auth'>
      <header>
        <Logo />
        <Themer />
      </header>
      <form>
        <h4>{type === 'login' ? 'welcome back' : 'sign up'}</h4>
        <div className='inputs'>
          {type === 'signup' && (
            <>
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
            </>
          )}
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

        {children}
        <div className='footer'>
          <p>Resipis.inc</p>
        </div>
      </form>
    </div>
  );
};

export default Authentication;
