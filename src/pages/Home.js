import React from 'react';

import Search from '../components/Home/Search';
import Display from '../components/Home/Display';
import Pagination from '../components/Home/Pagination';
import Container from '../components/UI/Container';

const Home = () => {
  return (
    <Container className='home' >
      <Search />
      <Display />
      <Pagination />
    </Container>
  );
};

export default Home;
