import React from 'react';

const DisplayRecipes = (props) => {
  return (
    <div className={`display-recipes ${props.className}`}>
      {props.children}
    </div>
  );
};

export default DisplayRecipes;
