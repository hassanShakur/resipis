import React from 'react';
import { NavLink } from 'react-router-dom';

import { AiOutlineHome } from 'react-icons/ai';
import { BsInfoSquare, BsPerson, BsSearch } from 'react-icons/bs';

const MenuIcons = () => {
  return (
    <section className='menu-icons'>
      <NavLink to='/' title='Home'>
        <AiOutlineHome className='icon' />
      </NavLink>
      <NavLink to='/search' title='Search'>
        <BsSearch className='icon' />
      </NavLink>
      <NavLink to='/about' title='About'>
        <BsInfoSquare className='icon' />
      </NavLink>
      <NavLink to='/profile' title='Profile'>
        <BsPerson className='icon' />
      </NavLink>
    </section>
  );
};

export default MenuIcons;
