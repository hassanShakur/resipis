import React from 'react';

const SingleSearchResult = ({ recipe }) => {
  const { title, image, id } = recipe;

  return (
    <div className='suggestion'>
      <img className='img' src={image} alt={title} />
      <div className='description'>
        <h5 className='name'>{title}</h5>
      </div>
    </div>
  );
};

export default SingleSearchResult;
