import React from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { useLocation, useNavigate } from 'react-router-dom';

const Suggestion = ({ suggestion }) => {
  const { title, image, cookTime, id } = suggestion;

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleRecipeClick = () => {
    navigate(`${pathname}/${id}`);
  };

  return (
    <div className='single-recipe' onClick={handleRecipeClick}>
      <img src={image} alt={title} />
      <div className='description'>
        <h5 className='name'>{title}</h5>
        <span className='time'>
          <AiOutlineClockCircle />
          <h5>{cookTime} mins</h5>
        </span>
      </div>
    </div>
  );
};

export default Suggestion;
