import React from 'react';

const Header = () => {
  return (
    <header>
      <div className='links'>
        <h1 className='logo'>Recipis</h1>
        <ul>
          <li>home</li>
          <li>discover</li>
          <li>more</li>
        </ul>
      </div>
      <div className='account-actions'>
        <button type='button'>sign up</button>
        <button type='button'>login</button>
      </div>
    </header>
  );
};

export default Header;
