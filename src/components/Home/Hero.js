import React, { useEffect, useState } from 'react';

import MenuIcons from '../UI/MenuIcons';
import stakeFork from './../../images/stake-fork.png';

const Hero = () => {
  const [num, setNum] = useState(0);
  const targetNum = 5000;

  useEffect(() => {
    const titmeoutId = setTimeout(() => {
      if (num === targetNum) return;

      setNum((prevNum) => prevNum + 25);
    }, 1);

    return () => {
      clearTimeout(titmeoutId);
    };
  });

  return (
    <div className='hero'>
      <div className='hero-text'>
        <h1>resipis</h1>
        <h3>for delicious recipes</h3>
        <p>
          Your favourite delicacy spot. Have access to{' '}
          <span id='count'>{num.toLocaleString()}+</span> recipes!
          Discover delicious recipes for every occasion! From healthy
          meals to quick and easy dinners, and show-stopping desserts,
          we have something for everyone. Enjoy exploring and
          discovering new recipes to add to your repertoire!
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
