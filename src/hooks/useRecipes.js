import FetchRecipes from '../utils/FetchRecipes';
import { useDispatch } from 'react-redux';

import { recipeActions } from '../store/recipes-slice';

const BASE_URL = 'https://api.spoonacular.com/recipes';
const API_KEY = 'apiKey=09908c6a4e7e49669b60317179a383e9';

const RANDOM_URL = `${BASE_URL}/random?number=4&${API_KEY}`;
const CATEGORIES_URL = `${BASE_URL}/complexSearch?type=&number=6&${API_KEY}`;

const useRecipes = () => {
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

  const getCategoryRecipes = async () => {
    try {
      let recipes = await FetchRecipes(CATEGORIES_URL);
      console.log(recipes);
      // recipes = recipes.map((recipe) => ({
      //   id: recipe.id,
      //   title: recipe.title,
      //   image: recipe.image,
      //   cookTime:
      //     (recipe.cookingMinutes === -1 ? 0 : recipe.cookingMinutes) +
      //     recipe.readyInMinutes,
      // }));
      // dispatch(recipeActions.createSuggestions(recipes));
    } catch (err) {
      console.log(err);
    }
  };

  return [getRandomRecipes, getCategoryRecipes];
};

export default useRecipes;
