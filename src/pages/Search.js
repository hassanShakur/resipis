import React from 'react';
import CategoriesPreview from '../components/Search/CategoriesPreview';
import SearchInput from '../components/Search/SearchInput';
import Suggestions from '../components/Search/Suggestions';
import Container from './../components/UI/Container';

const Search = () => {
  return (
    <Container className='search'>
      <SearchInput />
      <CategoriesPreview />
      <Suggestions />
    </Container>
  );
};

export default Search;
