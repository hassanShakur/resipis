// * ======= Third Party Components ======= */
import React from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

//? ======== Local Components ========== */
import tempImage from './../../images/temp.jpg';

const SingleRecipe = () => {
  return (
    <Link className='recipe' to='/recipes/:recipeId'>
      <img src={tempImage} alt='n' className='test'></img>
      <div className='description'>
        <h4 className='name'>item name</h4>
        <span className='time'>
          <AiOutlineClockCircle />
          <h5>30</h5>
        </span>
      </div>
    </Link>
  );
};

export default SingleRecipe;
