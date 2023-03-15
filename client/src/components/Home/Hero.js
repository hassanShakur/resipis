// * ======= Third Party Components ======= */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

//? ======== Local Components ========== */
import MenuIcons from '../UI/MenuIcons';
import stakeFork from './../../images/stake-fork.png';

const Hero = () => {
  const navigate = useNavigate();
  const [num, setNum] = useState(0);
  const targetNum = 500000;

  useEffect(() => {
    const titmeoutId = setTimeout(() => {
      if (num === targetNum) return;

      setNum((prevNum) => prevNum + 625);
    }, 0.1);

    return () => {
      clearTimeout(titmeoutId);
    };
  });

  const handleHeroBtnClick = () => {
    navigate('/search');
  };

  return (
    <div className='hero'>
      <div className='hero-text'>
        <div className='titles'>
          <h3>choose</h3>
          <h1>resipis</h1>
          <h3>for delicious recipes</h3>
        </div>
        <img id='mobile-img' src={stakeFork} alt='Stake with fork' />
        <p>
          Delicacy spot with access to{' '}
          <span id='count'>{num.toLocaleString()}+</span> recipes!
          Discover delicious <br /> recipes for every occasion! From
          healthy meals to quick and easy dinners,
          <br /> and show-stopping desserts, we have something for
          everyone. Enjoy <br /> exploring and discovering new recipes
          to add to your repertoire!
        </p>
        <div className='hero-icons'>
          <MenuIcons />
          <button className='hero-btn' onClick={handleHeroBtnClick}>
            Quick start
          </button>
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
