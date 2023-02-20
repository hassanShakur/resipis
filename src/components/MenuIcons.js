import React from 'react';

import { AiOutlineHome } from 'react-icons/ai';
import { BsInfoSquare, BsPerson, BsSearch } from 'react-icons/bs';

const MenuIcons = () => {
  return (
    <section className='menu-icons'>
      <AiOutlineHome />
      <BsSearch />
      <BsPerson />
      <BsInfoSquare />
    </section>
  );
};

export default MenuIcons;
