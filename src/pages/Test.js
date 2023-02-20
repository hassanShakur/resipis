import React from 'react';
import Footer from '../components/Home/Footer';

import Hero from '../components/Home/Hero';

import backgroundImage from './../images/background.jpg';
import stake from './../images/stake.png';

const Test = () => {
  return (
    <div className='test'>
      <img
        className='back-img'
        src={backgroundImage}
        alt='Background'
      />
      <div className='content'>
        <Hero />
        <Footer />
      </div>
    </div>
  );
};

export default Test;
