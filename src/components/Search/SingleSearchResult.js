import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SingleSearchResult = ({ recipe }) => {
  const { title, image, id } = recipe;
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleRecipeClick = () => {
    console.log(pathname);
    navigate(`${pathname}/${id}`);
  };

  return (
    <div className='single-recipe' onClick={handleRecipeClick}>
      <img className='img' src={image} alt={title} />
      <div className='description'>
        <h5 className='name'>{title}</h5>
      </div>
    </div>
  );
};

export default SingleSearchResult;
