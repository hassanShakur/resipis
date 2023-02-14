import React from 'react';

import Search from './Search';
import Display from './Display';
import Pagination from './Pagination';

const Main = () => {
  return (
    <main className='main-section'>
      <Search />
      <Display />
      <Pagination />
    </main>
  );
};

export default Main;
