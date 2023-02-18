import React from 'react';
import _ from 'lodash';
import Ingredient from './Ingredient';

const Ingredients = () => {
  return (
    <div className='ingredients'>
      <h3>Ingredients</h3>
      <ul>
        {_.range(8).map((_, id) => {
          return <Ingredient key={id} />;
        })}
      </ul>
    </div>
  );
};

export default Ingredients;
