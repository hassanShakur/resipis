import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { recipeActions } from '../store/recipes-slice';
import FetchRecipes from '../utils/FetchRecipes';
import { BASE_URL, API_KEY } from '../utils/URLs';

const useRandom = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const getRandomRecipes = async (numberOfResults) => {
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
      console.log(err);
    }
    setIsLoading(() => false);
  };
  return [getRandomRecipes, isLoading];
};

export default useRandom;
