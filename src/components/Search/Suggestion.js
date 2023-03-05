// * ======= Third Party Components ======= */
import React from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Suggestion = ({ suggestion, imageLoadedHandler }) => {
  const { title, image, cookTime, id } = suggestion;

  const navigate = useNavigate();

  const handleRecipeClick = () => {
    navigate(`/search/${id}`);
  };

  return (
    <div className='single-recipe' onClick={handleRecipeClick}>
      <img src={image} alt={title} onLoad={imageLoadedHandler} />
      <div className='description'>
        <h5 className='name'>{title}</h5>
        <span className='time'>
          <p>Ready in</p>
          <div>
            <AiOutlineClockCircle />
            <h5>{cookTime} mins</h5>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Suggestion;
