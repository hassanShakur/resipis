// * ======= Third Party Components ======= */
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SkeletonHolder from '../UI/SkeletonHolder';

const SingleSearchResult = ({ recipe }) => {
  const { title, image, id } = recipe;
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  const handleRecipeClick = () => {
    navigate(`${pathname}/${id}`);
  };

  const imageLoadHandler = () => {
    setIsLoading(() => false);
  };

  return (
    <>
      {isLoading && <SkeletonHolder limit={1} />}
      <div
        className='single-recipe'
        onClick={handleRecipeClick}
        style={{ display: `${isLoading ? 'none' : 'block'}` }}
      >
        <img
          onLoad={imageLoadHandler}
          className='img'
          src={image}
          alt={title}
        />
        <div className='description'>
          <h5 className='name'>{title}</h5>
        </div>
      </div>
    </>
  );
};

export default SingleSearchResult;
