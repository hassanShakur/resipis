// * ======= Third Party Components ======= */
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { SEARCH_RESULTS_PER_PAGE } from '../config/config';

//? ======== Local Components ========== */
import { recipeActions } from '../store/recipes-slice';
import FetchRecipes from '../utils/FetchRecipes';
import { API_KEY, BASE_URL } from '../config/config';

const useRecipes = (searchType, recipe, page) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  // const getRecipes = async () => {
  //   await searchRecipes(searchType, recipe, page);
  // };

  const searchRecipes = useCallback(async () => {
    const resultsPerPage = SEARCH_RESULTS_PER_PAGE;
    const offset = (page - 1) * resultsPerPage;
    const SEARCH_URL = `${BASE_URL}/complexSearch?sort=popularity&number=${resultsPerPage}&offset=${offset}&${searchType}=${recipe}&${API_KEY}`;

    try {
      setIsLoading(() => true);
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
      console.error(err, '💥💥💥');
      throw err;
    }
    setIsLoading(() => false);
  }, [dispatch, page, recipe, searchType]);

  useEffect(() => {
    if (!recipe) return;

    searchRecipes();
  }, [recipe, searchRecipes]);

  return [isLoading];
};

export default useRecipes;
