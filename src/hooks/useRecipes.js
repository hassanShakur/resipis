import FetchRecipes from '../utils/FetchRecipes';
import { useDispatch } from 'react-redux';

import { recipeActions } from '../store/recipes-slice';

const useRecipes = () => {
  const dispatch = useDispatch();

  const getRandomRecipes = async () => {
    try {
      const response = await FetchRecipes();
      dispatch(recipeActions.createSuggestions(response));
      
    } catch (err) {
      console.log(err);
    }
  };

  return [getRandomRecipes];
};

export default useRecipes;
