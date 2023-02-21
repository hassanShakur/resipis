import React from 'react';
import Footer from '../components/Home/Footer';

import Hero from '../components/Home/Hero';
import Background from '../components/UI/Background';

const Home = () => {
  return (
    <Background className='home' page='home'>
      <div className='content'>
        <Hero />
        <Footer />
      </div>
    </Background>
  );
};

export default Home;
