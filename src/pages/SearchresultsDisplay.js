import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
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
  }, []);

  const searchResults = useSelector(
    (state) => state.recipes.searchResults
  );

  console.log(searchResults);

  return <div>SearchresultsDisplay</div>;
};

export default SearchresultsDisplay;
