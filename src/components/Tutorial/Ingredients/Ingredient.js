import React from 'react';

const Ingredient = ({ ingredient }) => {
  if (ingredient) {
    const name = ingredient?.original;
    return <li> ✓ {name}</li>;
  }
};

export default Ingredient;
