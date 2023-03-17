import React from 'react';
import Header from '../../Header/Header';
import SearchInput from '../../Search/SearchInput';
import Container from '../../UI/Container';

const Bookmarks = () => {
  return (
    <Container>
      <Header />
      <SearchInput
        title='my bookmarks'
        placeholder='Search your bookmarks'
      />
    </Container>
  );
};

export default Bookmarks;
