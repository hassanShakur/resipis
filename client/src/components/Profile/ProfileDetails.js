import React from 'react';
import { useSelector } from 'react-redux';

const ProfileDetails = () => {
  const user = useSelector((state) => state.auth.user);
  console.log(user);

  return (
    <div className='profile-details'>
      <div className='avatar'>
        <img src='' alt='' />
      </div>
    </div>
  );
};

export default ProfileDetails;
