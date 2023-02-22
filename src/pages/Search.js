import React, { useEffect } from 'react';

import CategoriesPreview from '../components/Search/CategoriesPreview';
import Header from '../components/Header/Header';
import SearchInput from '../components/Search/SearchInput';
import Suggestions from '../components/Search/Suggestions';
import Container from './../components/UI/Container';
import { useSearchParams } from 'react-router-dom';
import SearchResults from '../components/Search/SearchResults';
import useRecipes from '../hooks/useRecipes';
import { useSelector } from 'react-redux';

// let recipe;
const Search = () => {
  const [searchParams] = useSearchParams();
  const [searchRecipes] = useRecipes();
  const recipe = searchParams.get('recipe');

  const searchResults = useSelector(
    (state) => state.recipes.searchResults
  );

  useEffect(() => {
    if (!recipe) return;
    const getRecipes = async () => {
      await searchRecipes(recipe);
    };

    getRecipes();
  }, []);

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
