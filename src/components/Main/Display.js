import React from 'react';

import _ from 'lodash';

import tempImage from './../../images/temp.jpg';

const Display = () => {
  return (
    <section className='recipes'>
      {_.range(15).map((img) => {
        return <div className='test'></div>;
      })}
    </section>
  );
};

export default Display;

// {
//   utils
//     .range(1, props.count)
//     .map((starId) => <div key={starId} className='star' />);
// }
