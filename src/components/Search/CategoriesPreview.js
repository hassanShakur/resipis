import React from 'react';
import { Link } from 'react-router-dom';

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
            const minCategory = category.split(' ').join('');
            return (
              <Link
                to={`/search/type/${category}`}
                className='preview'
                key={id}
              >
                <img
                  src={require(`./../../images/${minCategory}.jpeg`)}
                  alt={category}
                />
                <p>{category}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPreview;
