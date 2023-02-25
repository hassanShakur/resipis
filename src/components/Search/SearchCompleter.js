import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { recipeActions } from '../../store/recipes-slice';
import CustomSkeleton from './../UI/CustomSkeleton';

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
    setSearchInput(title);
  };
  return isLoading ? (
    <CustomSkeleton />
  ) : (
    <p onClick={handleClick}>{title}</p>
  );
};

export default SearchCompleter;
