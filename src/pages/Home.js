import React from 'react';

import Search from '../components/Home/Search';
import Display from '../components/Home/Display';
import Pagination from '../components/Home/Pagination';

const Home = () => {
  return (
    <main className='main-section'>
      <Search />
      <Display />
      <Pagination />
    </main>
  );
};

export default Home;
