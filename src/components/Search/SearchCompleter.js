import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { recipeActions } from '../../store/recipes-slice';

const SearchCompleter = ({ completion }) => {
  const { title } = completion;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(recipeActions.setSearchQuery(title));
    navigate(`/search/${title}`);
  };
  return (
    // <Link
    //   to={`/search?recipe=${title}`}
    //   className='completion-link'
    //   onClick={handler}
    // >
    <p onClick={handleClick}>{title}</p>
    // </Link>
  );
};

export default SearchCompleter;
