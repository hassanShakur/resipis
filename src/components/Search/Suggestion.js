import React from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';

const Suggestion = ({ suggestion }) => {
  const { title, image, cookTime, id } = suggestion;
  return (
    <div className='single-recipe'>
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
