import React from 'react';
import MenuIcons from '../UI/MenuIcons';

import Themer from './../Header/Themer';

const Header = () => {
  return (
    <header className='search-header'>
      <MenuIcons />
      <Themer />
    </header>
  );
};

export default Header;
