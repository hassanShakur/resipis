// * ======= Third Party Components ======= */
import React from 'react';

//? ======== Local Components ========== */
import MenuIcons from '../components/UI/MenuIcons';
import Background from '../components/UI/Background';

const About = () => {
  return (
    <Background className='about' page='about'>
      <div className='content'>
        <MenuIcons />
      </div>
    </Background>
  );
};

export default About;
