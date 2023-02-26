// * ======= Third Party Components ======= */
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

//? ======== Local Components ========== */
import { recipeActions } from '../store/recipes-slice';
import { API_KEY, BASE_URL } from '../utils/URLs';

const useSearchCompletion = (query) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showCompletions, setShowCompletions] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleFormSubmit = () => {
    dispatch(recipeActions.setSearchQuery(query));
    navigate(`/search/query/${query}`);
    setShowCompletions(false);
  };

  const getCompletions = useCallback(async () => {
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
      console.error(err, '💥💥💥');
      throw err;
    }
    setIsLoading(() => false);
  }, [dispatch, query]);

  useEffect(() => {
    if (!query) return;

    const timeoutId = setTimeout(async () => {
      await getCompletions();
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [getCompletions, query]);

  return [
    handleFormSubmit,
    setShowCompletions,
    showCompletions,
    isLoading,
  ];
};

export default useSearchCompletion;

//  const handleFormSubmit = (e) => {
//    e.preventDefault();
//    dispatch(recipeActions.setSearchQuery(searchInput));
//    navigate(`/search/query/${searchInput}`);
//    setShowCompletions(false);
//  };

//  useEffect(() => {
//    // if (searchInput.length < 1) return;

//    const timeoutId = setTimeout(async () => {
//      await getCompletions(searchInput);
//    }, 500);

//    return () => {
//      clearTimeout(timeoutId);
//    };
//  }, [searchInput]);
