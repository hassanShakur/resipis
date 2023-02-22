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
            return (
              <div className='preview' key={id}>
                <img
                  src={require(`./../../images/${category}.jpeg`)}
                  alt={category}
                />
                <p>{category}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPreview;
