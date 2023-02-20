import React from 'react';
import Suggestion from './Suggestion';

import _ from 'lodash'

const Suggestions = () => {
  return (
    <section className='suggestions'>
      <h3>Suggestions</h3>

      <div className='content'>
        {_.range(15).map((_, id) => {
        return <Suggestion key={id} />;
      })}
      </div>
    </section>
    
  );
};

export default Suggestions;
