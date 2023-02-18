import React from 'react';
import _ from 'lodash';

import SingleRecipe from '../Home/SingleRecipe';

const Recomended = () => {
  return (
    <div className='recomended'>
      <div className='header'>
        <h3>Recomended</h3>
        <button type='button' className='see-all'>
          See all
        </button>
      </div>
      <div className='rec-recipes'>
        {_.range(4).map((_, id) => {
          return <SingleRecipe key={id} />;
        })}
      </div>
    </div>
  );
};

export default Recomended;
