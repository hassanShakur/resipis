import React from 'react';
import _ from 'lodash';

import SingleRecipe from '../Home/SingleRecipe';

const DiscoverRow = (props) => {
  const { title } = props;
  return (
    <div className={`${props.className} discover-row`}>
      <div className='header'>
        <h3>{title}</h3>
        <button type='button' className='see-all'>
          See all
        </button>
      </div>
      <div className='recipes'>
        {_.range(4).map((_, id) => {
          return <SingleRecipe key={id} />;
        })}
      </div>
    </div>
  );
};

export default DiscoverRow;
