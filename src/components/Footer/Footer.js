import React from 'react';

import { Link } from 'react-router-dom';

const linkItems = [
  { name: 'home', to: '' },
  { name: 'discover', to: '' },
  { name: 'more', to: '' },
  { name: 'about', to: '/about' },
];

const Footer = () => {
  return (
    <footer>
      <div className='nav'>
        <div className='links'>
          <div>
            <h1 className='logo'>Recipis</h1>
            <div className='copy'>
              <p>@copywrite resipi 2023</p>
            </div>
          </div>
          <ul>
            {linkItems.map((item) => (
              <li key={item.name}>
                <Link className='link' to={item.to}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='account-actions'>
          <span>fb</span>
          <span>tw</span>
          <span>wa</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
