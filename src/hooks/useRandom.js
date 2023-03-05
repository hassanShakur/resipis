// * ======= Third Party Components ======= */
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { RANDOM_RESULTS_PER_PAGE } from '../config/config';

//? ======== Local Components ========== */
import { recipeActions } from '../store/recipes-slice';
import FetchRecipes from '../utils/FetchRecipes';
import { BASE_URL, API_KEY } from '../config/config';

const useRandom = (numberOfResults = RANDOM_RESULTS_PER_PAGE) => {
  const dispatch = useDispatch();
  const [isError, setIsError] = useState({});
  const [isFetching, setIsFetching] = useState(true);

  const getRandomRecipes = useCallback(async () => {
    const RANDOM_URL = `${BASE_URL}/random?number=${numberOfResults}&${API_KEY}`;
    try {
      setIsFetching(() => true);
      let { recipes } = await FetchRecipes(RANDOM_URL);

      recipes = recipes.map((recipe) => ({
        id: recipe.id,
        title: recipe.title,
        image: recipe.image,
        cookTime:
          (recipe.cookingMinutes === -1 ? 0 : recipe.cookingMinutes) +
          recipe.readyInMinutes,
      }));

      dispatch(recipeActions.createSuggestions(recipes));
    } catch (err) {
      // console.error(err.name, err.message, '💥💥💥');
      setIsError(() => err);
      // throw err;
    }
    setIsFetching(() => false);
  }, [dispatch, numberOfResults]);

  useEffect(() => {
    getRandomRecipes();
  }, [getRandomRecipes]);

  return [isFetching, isError];
};

export default useRandom;
