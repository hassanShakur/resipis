import { useDispatch } from 'react-redux';
import { recipeActions } from '../store/recipes-slice';
import FetchRecipes from '../utils/FetchRecipes';
import { API_KEY, BASE_URL } from '../utils/URLs';

const useRecipes = () => {
  const dispatch = useDispatch();

  const searchRecipes = async (searchType, recipe) => {
    const SEARCH_URL = `${BASE_URL}/complexSearch?sort=popularitynumber=8&${searchType}=${recipe}&${API_KEY}`;
    try {
      let data = await FetchRecipes(SEARCH_URL);
      const { results } = data;

      const recipes = results.map((recipe) => ({
        id: recipe.id,
        title: recipe.title,
        image: recipe.image,
      }));

      dispatch(recipeActions.createSearchResults(recipes));
    } catch (err) {
      console.log(err);
    }
  };
  return [searchRecipes];
};

export default useRecipes;
