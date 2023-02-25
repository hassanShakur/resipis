import React from 'react';
import CustomSkeleton from './CustomSkeleton';

const DisplayRecipes = (props) => {
  return props.isLoading ? (
    <CustomSkeleton height='25vh' width='100%' />
  ) : (
    <div className={`display-recipes ${props.className}`}>
      {props.children}
    </div>
  );
};

export default DisplayRecipes;
