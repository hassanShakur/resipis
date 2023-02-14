import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className='links'>
        <h1 className='logo'>Recipis</h1>
        <ul>
          <li>
            <Link>home</Link>
          </li>
          <li>
            <Link>discover</Link>
          </li>
          <li>
            <Link>more</Link>
          </li>
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
