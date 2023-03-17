// * ======= Third Party Components ======= */
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

//? ======== Local Components ========== */
import { recipeActions } from '../store/recipes-slice';
import { API_KEY, BASE_URL } from '../config/config';

const useSearchCompletion = (query, custom = false) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const bookmarks = useSelector((state) => state.auth.bookmarks);
  const [showCompletions, setShowCompletions] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleFormSubmit = () => {
    // if (custom) {
    //   setShowCompletions(false);
    //   return;
    // }
    dispatch(recipeActions.setSearchQuery(query));
    navigate(`/search/query/${query}`);
    setShowCompletions(false);
  };

  const getCompletions = useCallback(async () => {
    // const copyBookmarks = [...bookmarks];
    const AUTOCOMPLETE_SEARCH_URL = `${BASE_URL}/autocomplete?number=15&query=${query}&${API_KEY}`;

    try {
      setIsLoading(() => true);
      let completions;
      // Search through bookmarks
      // if (custom) {
      //   if (!copyBookmarks) return;
      //   completions = copyBookmarks.filter((bookmark) =>
      //     bookmark.recipe.title
      //       .toLowerCase()
      //       .includes(query.toLowerCase())
      //   );
      //   completions = completions.map((completion) => ({
      //     id: completion.recipe.id,
      //     title: completion.recipe.title,
      //   }));
      //   // Search through spoonacular completions
      // } else {
      const res = await fetch(AUTOCOMPLETE_SEARCH_URL);
      completions = await res.json();
      completions = completions.map((completion) => ({
        id: completion.id,
        title: completion.title,
      }));
      // }
      dispatch(recipeActions.createSearchCompletions(completions));
    } catch (err) {
      // console.error(err, '💥💥💥');
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
