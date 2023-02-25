// * ======= Third Party Components ======= */
import React from 'react';

//? ======== Local Components ========== */
import CategoriesPreview from '../components/Search/CategoriesPreview';
import Header from '../components/Header/Header';
import SearchInput from '../components/Search/SearchInput';
import Suggestions from '../components/Search/Suggestions';
import Container from './../components/UI/Container';

const Search = () => {
  return (
    <Container className='search'>
      <Header />
      <SearchInput />
      <CategoriesPreview />
      <Suggestions />
    </Container>
  );
};

export default Search;
