import React from 'react';
import { NavLink } from 'react-router-dom';

import { AiOutlineHome } from 'react-icons/ai';
import { BsInfoSquare, BsPerson, BsSearch } from 'react-icons/bs';

const MenuIcons = () => {
  return (
    <section className='menu-icons'>
      <NavLink to='/' title='Home' className='icon-link'>
        <AiOutlineHome className='icon' />
        <span>home</span>
      </NavLink>
      <NavLink to='/search' title='Search' className='icon-link'>
        <BsSearch className='icon' />
        <span>search</span>
      </NavLink>
      <NavLink to='/about' title='About' className='icon-link'>
        <BsInfoSquare className='icon' />
        <span>about</span>
      </NavLink>
      <NavLink to='/profile' title='Profile' className='icon-link'>
        <BsPerson className='icon' />
        <span>profile</span>
      </NavLink>
    </section>
  );
};

export default MenuIcons;
