// * ======= Third Party Components ======= */
import React from 'react';

//? ======== Local Components ========== */
import Footer from '../components/Home/Footer';
import Header from '../components/Home/Header';
import Hero from '../components/Home/Hero';
import Background from '../components/UI/Background';

const Home = () => {
  return (
    <Background className='home' page='home'>
      <div className='content'>
        <Header />
        <Hero />
        <Footer />
      </div>
    </Background>
  );
};

export default Home;
