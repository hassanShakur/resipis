import React from 'react';
import { FiCheckSquare } from 'react-icons/fi';

const Ingredient = ({ ingredient }) => {
  if (ingredient) {
    const name = ingredient?.original;
    return (
      <li>
        <FiCheckSquare /> {name}
      </li>
    );
  }
};

export default Ingredient;
