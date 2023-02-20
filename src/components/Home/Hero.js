import React from 'react';

import MenuIcons from '../MenuIcons';
import stakeFork from './../../images/stake-fork.png';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-text'>
        <h1>resipis</h1>
        <h3>recipes</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Itaque, commodi voluptatem deserunt culpa ad rerum quas,
          quibusdam placeat possimus et mollitia dolorum pariatur
          impedit doloremque sit officiis corporis iure magni!
        </p>
        <div className='hero-icons'>
          <MenuIcons />
        </div>
      </div>
      <img
        id='stake-fork-img'
        src={stakeFork}
        alt='Stake with fork'
      />
    </div>
  );
};

export default Hero;
