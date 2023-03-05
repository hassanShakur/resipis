// * ======= Third Party Components ======= */
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

//? ======== Local Components ========== */
import { recipeActions } from '../../store/recipes-slice';

const SearchCompleter = ({
  completion,
  setShowCompletions,
  setSearchInput,
  isLoading,
}) => {
  const { title } = completion;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    setSearchInput((_) => title);
    dispatch(recipeActions.setSearchQuery(title));
    navigate(`/search/query/${title}`);
    setShowCompletions(false);
  };

  return <p onClick={handleClick}>{title}</p>;
};

export default SearchCompleter;
