// * ======= Third Party Components ======= */
import React from 'react';
import { useNavigate } from 'react-router-dom';

//? ======== Local Components ========== */
import categories from '../../utils/categories';

const CategoriesPreview = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/search/type/${category}`);
  };

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
              <div
                onClick={() => handleCategoryClick(category)}
                className='preview'
                key={id}
              >
                <img
                  src={require(`./../../images/${minCategory}.jpeg`)}
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
