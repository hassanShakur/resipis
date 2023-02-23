import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Header from '../components/Header/Header';
import SearchInput from '../components/Search/SearchInput';
import SingleSearchResult from '../components/Search/SingleSearchResult';
import Container from '../components/UI/Container';
import DisplayRecipes from '../components/UI/DisplayRecipes';
import useRecipes from '../hooks/useRecipes';

const SearchresultsDisplay = () => {
  const params = useParams();
  const { searchType, recipe } = params;
  const [searchRecipes] = useRecipes();

  useEffect(() => {
    if (!recipe) return;

    const getRecipes = async () => {
      await searchRecipes(searchType, recipe);
    };

    getRecipes();
  }, [recipe]);

  const searchResults = useSelector(
    (state) => state.recipes.searchResults
  );

  return (
    <Container>
      <Header />
      <SearchInput />
      <section className='suggestions'>
        <h3>
          Results for <i>{recipe}</i>
        </h3>
        <DisplayRecipes>
          {searchResults.map((recipe) => {
            return (
              <SingleSearchResult recipe={recipe} key={recipe.id} />
            );
          })}
        </DisplayRecipes>
      </section>
    </Container>
  );
};

export default SearchresultsDisplay;
