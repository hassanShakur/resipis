import React from 'react';
import { Link } from 'react-router-dom';

const linkItems = [
  { name: 'home', to: '/' },
  { name: 'discover', to: '' },
  { name: 'more', to: '' },
  { name: 'tutorial', to: '/tutorial' },
];

const Header = () => {
  return (
    <header className='nav'>
      <div className='links'>
        <h1 className='logo'>Recipis</h1>
        <ul>
          {linkItems.map((item) => (
            <li key={item.name}>
              <Link to={item.to} className='link'>
                {item.name}
              </Link>
            </li>
          ))}
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
