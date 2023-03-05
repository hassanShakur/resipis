import React from 'react';

import { BiError } from 'react-icons/bi';

const NetworkError = ({ error }) => {
  const message =
    error.name === 'TypeError'
      ? "We're having trouble fetching the resourse! Please check your connection and try again!"
      : 'Something went wrong!';
  return (
    <div className='network-error'>
      <BiError className='icon' />
      <h4>{message}</h4>
      <hr />
      <h5>Advanced</h5>
      <p>Issue: {error.name}</p>
      <p>Message: {error.message}</p>
    </div>
  );
};

export default NetworkError;
