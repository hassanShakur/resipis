import React from 'react';

const CategoriesPreview = () => {
  return (
    <div className='categories-preview'>
      <div className='header'>
        <h3>Categories</h3>
        <button className='see-all'>see all</button>
      </div>
      <div className='previews'>
        <div className='img'></div>
        <div className='img'></div>
        <div className='img'></div>
        <div className='img'></div>
        <div className='img'></div>
        <div className='img'></div>
        <div className='img'></div>
        <div className='img'></div>
      </div>
    </div>
  );
};

export default CategoriesPreview;
