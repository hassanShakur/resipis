import React from 'react';
import DiscoverRow from '../components/UI/DiscoverRow';

import Container from '../components/UI/Container';

const Discover = () => {
  return (
    <Container className='discover'>
      <h2>Discover</h2>
      <DiscoverRow />
      <DiscoverRow />
      <DiscoverRow />
    </Container>
  );
};

export default Discover;
