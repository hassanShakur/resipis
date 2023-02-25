// * ======= Third Party Components ======= */
import { useState } from 'react';
import { useDispatch } from 'react-redux';

//? ======== Local Components ========== */
import { recipeActions } from '../store/recipes-slice';
import { API_KEY, BASE_URL } from '../utils/URLs';

const useSearchCompletion = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const getCompletions = async (query) => {
    const AUTOCOMPLETE_SEARCH_URL = `${BASE_URL}/autocomplete?number=15&query=${query}&${API_KEY}`;
    try {
      setIsLoading(() => true);
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
    setIsLoading(() => false);
  };

  return [getCompletions, isLoading];
};

export default useSearchCompletion;
