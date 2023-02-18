import React from 'react';

import Directions from '../components/Tutorial/Directions/Directions';
import Equipment from '../components/Tutorial/Equipment';
import Ingredients from '../components/Tutorial/Ingredients/Ingredients';
import Nutrition from '../components/Tutorial/Nutritions/Nutritions';
import Recommended from '../components/Tutorial/Recommended';
import Timing from '../components/Tutorial/Timing';
import Tips from '../components/Tutorial/Tips';
import Video from '../components/Tutorial/Video';

const Tutorial = () => {
  return (
    <section className='tutorial-container'>
      <Video />
      <Directions />
      <div className='tutorial-details'>
        <Timing />
        <Nutrition />
        <Tips />
        <Equipment />
        <Ingredients />
      </div>
      <Recommended />
    </section>
  );
};

export default Tutorial;