import { useDispatch } from 'react-redux';
import { recipeActions } from '../store/recipes-slice';
import FetchRecipes from '../utils/FetchRecipes';
import { RANDOM_URL } from '../utils/URLs';

const useRandom = () => {
  const dispatch = useDispatch();

  const getRandomRecipes = async () => {
    try {
      let recipes = await FetchRecipes(RANDOM_URL);

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
  };
  return [getRandomRecipes];
};

export default useRandom;
