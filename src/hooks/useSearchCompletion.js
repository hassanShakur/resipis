import { useDispatch } from 'react-redux';
import { recipeActions } from '../store/recipes-slice';
import { API_KEY, BASE_URL } from '../utils/URLs';

const useSearchCompletion = () => {
  const dispatch = useDispatch();

  const getCompletions = async (query) => {
    const AUTOCOMPLETE_SEARCH_URL = `${BASE_URL}/autocomplete?number=8&query=${query}&${API_KEY}`;
    try {
      const res = await fetch(AUTOCOMPLETE_SEARCH_URL);
      let completions = await res.json();
      completions = completions.map((completion) => ({
        id: completion.id,
        title: completion.title,
      }));

      dispatch(recipeActions.createSearchCompletions(completions));
    } catch (err) {
      console.log(err);
    }
  };

  return [getCompletions];
};

export default useSearchCompletion;
