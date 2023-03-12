import React from 'react';
import { useSelector } from 'react-redux';
import { LOCAL_SERVER_URL } from '../../config/config';

const ProfileDetails = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className='profile-details'>
      <div className='avatar'>
        <img
          src={`${LOCAL_SERVER_URL}/${
            user.avatar || 'uploads/images/default-avatar.jpeg'
          }`}
          crossOrigin='anonymous'
          alt='User avatar'
        />
      </div>
      <div className='info'>
        <h4>my profile</h4>
        <p>name: {user.name}</p>
        <p>email: {user.email}</p>
        {/* <p>bookmarks: {user.bookmarks.length}</p> */}
      </div>
    </div>
  );
};

export default ProfileDetails;
