// * ======= Third Party Components ======= */
import React from 'react';

//? ======== Local Components ========== */
import CustomSkeleton from '../../UI/CustomSkeleton';
import Ingredient from './Ingredient';

const Ingredients = ({ ingredients, isLoading }) => {
  return isLoading ? (
    <CustomSkeleton />
  ) : (
    <div className='ingredients'>
      <h3>Ingredients</h3>
      <ul>
        {ingredients?.map((ingredient, id) => {
          return (
            <Ingredient
              key={id}
              ingredient={ingredient}
              isLoading={isLoading}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Ingredients;
