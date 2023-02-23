import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Header from '../components/Header/Header';
import SearchInput from '../components/Search/SearchInput';
import SingleSearchResult from '../components/Search/SingleSearchResult';
import Suggestion from '../components/Search/Suggestion';
import Container from '../components/UI/Container';
import DisplayRecipes from '../components/UI/DisplayRecipes';
import useRecipes from '../hooks/useRecipes';

const SearchresultsDisplay = () => {
  const params = useParams();
  const recipeQuery = params.recipe;
  const [searchRecipes] = useRecipes();

  useEffect(() => {
    if (!recipeQuery) return;

    const getRecipes = async () => {
      await searchRecipes(recipeQuery);
    };

    getRecipes();
  }, [recipeQuery]);

  const searchResults = useSelector(
    (state) => state.recipes.searchResults
  );

  return (
    <Container>
      <Header />
      <SearchInput />
      <section className='suggestions'>
        <h3>
          Results for <i>{recipeQuery}</i>
        </h3>
        <DisplayRecipes>
          {/* <div className='content'> */}
          {searchResults.map((recipe) => {
            return (
              <SingleSearchResult recipe={recipe} key={recipe.id} />
            );
          })}
        </DisplayRecipes>
        {/* </div> */}
      </section>
    </Container>
  );
};

export default SearchresultsDisplay;
