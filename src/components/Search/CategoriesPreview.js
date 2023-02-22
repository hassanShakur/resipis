import React from 'react';
import CategoryPreview from './CategoryPreview';

import categories from '../../utils/categories';

const CategoriesPreview = () => {
  return (
    <div className='categories-preview'>
      <div className='header'>
        <h3>Categories</h3>
        <button className='see-all'>see all</button>
      </div>
      <div className='previews-container'>
        <div className='previews'>
          {categories.map((category, id) => {
            return <CategoryPreview category={category} key={id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPreview;
