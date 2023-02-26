// * ======= Third Party Components ======= */
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { RANDOM_RESULTS_PER_PAGE } from '../config/config';

//? ======== Local Components ========== */
import { recipeActions } from '../store/recipes-slice';
import FetchRecipes from '../utils/FetchRecipes';
import { BASE_URL, API_KEY } from '../utils/URLs';

const useRandom = (numberOfResults = RANDOM_RESULTS_PER_PAGE) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const getRandomRecipes = useCallback(async () => {
    const RANDOM_URL = `${BASE_URL}/random?number=${numberOfResults}&${API_KEY}`;
    try {
      setIsLoading(() => true);
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
      console.error(err, '💥💥💥');
      throw err;
    }
    setIsLoading(() => false);
  }, [dispatch, numberOfResults]);

  useEffect(() => {
    getRandomRecipes();
  }, [getRandomRecipes]);

  return [isLoading];
};

export default useRandom;
