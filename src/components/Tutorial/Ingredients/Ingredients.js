import React from 'react';
import Ingredient from './Ingredient';

const Ingredients = ({ ingredients }) => {
  return (
    <div className='ingredients'>
      <h3>Ingredients</h3>
      <ul>
        {ingredients?.map((ingredient, id) => {
          return <Ingredient key={id} ingredient={ingredient} />;
        })}
      </ul>
    </div>
  );
};

export default Ingredients;
