import React from 'react';
import { Link } from 'react-router-dom';
import { BsPerson } from 'react-icons/bs';
import { BiLockOpen } from 'react-icons/bi';

const Authentication = () => {
  return (
    <div className='auth'>
      <div className='login'>
        <h3>welcome back!</h3>
        <form>
          {/* <label htmlFor='email'>email address</label> */}
          <div className='email'>
            <BsPerson className='icon' />
            <input
              type='email'
              name='email'
              id='email'
              placeholder='example@email.com'
            />
          </div>
          {/* <label htmlFor='password'>password</label> */}
          <div className='password'>
            <BiLockOpen className='icon' />
            <input
              type='password'
              name='password'
              id='password'
              placeholder='Password'
            />
          </div>
          <button type='submit' className='submit-btn'>
            login
          </button>
          <button type='submit' className='submit-btn'>
            login
          </button>
          <button type='submit' className='submit-btn'>
            login
          </button>
          <p>
            No account? <Link to='/signup'>Sign up</Link>
          </p>
        </form>
      </div>
      <div className='sign-up'>
        <h3>sign up</h3>
        <form>
          <label htmlFor='email'>email address</label>
          <input type='email' name='email' id='email' />
          <label htmlFor='password'>password</label>
          <input type='password' name='password' id='password' />
          <button type='submit'>login</button>
          <p>
            No account? <Link to='/signup'>Sign up</Link>
          </p>
        </form>
      </div>
      <div className='image-cover'>
        {/* <img src='' alt='' /> */}
        <div className='transparent'></div>
        <div className='image'></div>
      </div>
    </div>
  );
};

export default Authentication;
