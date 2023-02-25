import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { recipeActions } from '../store/recipes-slice';
import FetchRecipes from '../utils/FetchRecipes';
import { API_KEY, BASE_URL } from '../utils/URLs';

const useRecipes = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const searchRecipes = async (searchType, recipe, page) => {
    const resultsPerPage = 8;
    const offset = (page - 1) * resultsPerPage;
    const SEARCH_URL = `${BASE_URL}/complexSearch?sort=popularitynumber=${resultsPerPage}&offset=${offset}&${searchType}=${recipe}&${API_KEY}`;

    try {
      setIsLoading(true);
      let data = await FetchRecipes(SEARCH_URL);
      const { results, totalResults } = data;
      const lastPage = Math.ceil(totalResults / resultsPerPage);

      const recipes = results.map((recipe) => ({
        id: recipe.id,
        title: recipe.title,
        image: recipe.image,
      }));

      recipes.lastPage = lastPage;

      dispatch(recipeActions.createSearchResults(recipes));
    } catch (err) {
      console.log(err);
    }
    setIsLoading(true);
  };
  return [searchRecipes, isLoading];
};

export default useRecipes;
