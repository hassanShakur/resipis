// * ======= Third Party Components ======= */
import React from 'react';

//? ======== Local Components ========== */
import Background from '../components/UI/Background';
import Footer from '../components/Home/Footer';
import Header from '../components/Home/Header';
import ProfileDetails from '../components/Profile/ProfileDetails';
import ProfileBookmarks from '../components/Profile/ProfileBookmarks';

const Profile = () => {
  return (
    <Background className='profile' page='home'>
      <div className='content'>
        <Header />
        <div className='details'>
          <ProfileDetails />
          <ProfileBookmarks />
        </div>
        <Footer />
      </div>
    </Background>
  );
};

export default Profile;
