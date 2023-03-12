import React from 'react';
import { useSelector } from 'react-redux';
import { LOCAL_SERVER_URL } from '../../config/config';
// import {TbPhotoEdit} from 'react-icons/tb'
import { FiEdit } from 'react-icons/fi';
import { HiOutlineLogout } from 'react-icons/hi';

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
        <form>
          <div className='name'>
            <label htmlFor='name'>name</label>
            <input
              type='text'
              name='name'
              id='name'
              placeholder={user.name}
            />
          </div>
          <div className='email'>
            <label htmlFor='email'>email</label>
            <input
              type='email'
              name='email'
              id='email'
              placeholder={user.email}
            />
          </div>
          <FiEdit className='edit' />
        </form>

        {/* <p>bookmarks: {user.bookmarks.length}</p> */}
      </div>
      <button className='logout'>
        Logout
        <HiOutlineLogout className='icon' />
      </button>
    </div>
  );
};

export default ProfileDetails;
