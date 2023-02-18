import React from 'react';

import Popular from '../components/Discover/Popular';
import Trending from '../components/Discover/Trending';

import Container from '../components/UI/Container';

const Discover = () => {
  return (
    <Container className='discover'>
      <h2>Discover</h2>
      <Popular />
      <Trending />
    </Container>
  );
};

export default Discover;
