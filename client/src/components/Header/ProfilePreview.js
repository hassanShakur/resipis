import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOCAL_SERVER_URL } from '../../config/config';
import { MdOutlineManageAccounts } from 'react-icons/md';
import { HiOutlineLogout } from 'react-icons/hi';
import { authActions } from '../../store/auth-slice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProfilePreview = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [actionIsVisible, setActionIsVisible] = useState(false);

  const logoutClickHandler = () => {
    setActionIsVisible(() => false);
    axios
      .post(`${LOCAL_SERVER_URL}/api/users/logout`)
      .then(() => {
        dispatch(authActions.logout());
      })
      .catch((err) => console.log(err));
  };

  const profileClickHandler = () => {
    setActionIsVisible(() => false);
    navigate('/profile');
  };

  return (
    <div className='profile-prev'>
      <img
        src={`${LOCAL_SERVER_URL}/${
          user?.avatar || 'uploads/images/default-avatar.jpeg'
        }`}
        crossOrigin='anonymous'
        alt='User avatar'
        onClick={() => setActionIsVisible(() => !actionIsVisible)}
      />
      <div
        className='account-actions'
        style={
          actionIsVisible ? { display: 'grid' } : { display: 'none' }
        }
      >
        <button
          type='button'
          className='account'
          onClick={profileClickHandler}
        >
          <MdOutlineManageAccounts />
          profile
        </button>
        <button
          type='button'
          className='logout'
          onClick={logoutClickHandler}
        >
          <HiOutlineLogout />
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfilePreview;
