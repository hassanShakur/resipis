import React from 'react';
import { NavLink } from 'react-router-dom';

import { AiOutlineHome } from 'react-icons/ai';
import { BsInfoSquare, BsPerson, BsSearch } from 'react-icons/bs';

const MenuIcons = () => {
  return (
    <section className='menu-icons'>
      <NavLink to='/'>
        <AiOutlineHome className='icon' />
      </NavLink>
      <NavLink to='/search'>
        <BsSearch className='icon' />
      </NavLink>
      <NavLink to='/about'>
        <BsInfoSquare className='icon' />
      </NavLink>
      <NavLink to='/profile'>
        <BsPerson className='icon' />
      </NavLink>
    </section>
  );
};

export default MenuIcons;
