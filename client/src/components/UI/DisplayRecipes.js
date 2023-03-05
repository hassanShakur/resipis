import React from 'react';

const DisplayRecipes = (props) => {
  return (
    <div
      className={`display-recipes ${props.className}`}
      style={props.style}
    >
      {props.children}
    </div>
  );
};

export default DisplayRecipes;
