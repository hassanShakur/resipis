import React from 'react'
import tempImage from './../../images/temp.jpg';

const SingleRecipe = () => {
  return (
    <div className='recipe'>
      <img src={tempImage} alt='n' className='test'></img>
      <div className='description'>
        <span className='name'>some item name</span>
        <div className='details'>
          <span className='cook'>cook</span>
          <span className='rating'>⭐4.2</span>
        </div>
      </div>
    </div>
  );
}

export default SingleRecipe