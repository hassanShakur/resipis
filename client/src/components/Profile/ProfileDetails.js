import React, { useRef, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { LOCAL_SERVER_URL } from '../../config/config';
import { FiEdit } from 'react-icons/fi';
import { HiOutlineLogout } from 'react-icons/hi';
import { authActions } from '../../store/auth-slice';
import Spinner from '../UI/Spinner';
// import { IoImageOutline } from 'react-icons';
import { BiImage } from 'react-icons/bi';

const ProfileDetails = () => {
  const user = useSelector((state) => state.auth.user);
  const [isRequesting, setIsRequesting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [email, setEmail] = useState(user.email);
  const [name, setName] = useState(user.name);
  const dispatch = useDispatch();
  const nameRef = useRef();

  const logoutClickHandler = () => {
    setIsRequesting(() => true);
    axios
      .post(`${LOCAL_SERVER_URL}/api/users/logout`)
      .then(() => {
        dispatch(authActions.logout());
      })
      .catch((err) => console.log(err));

    setIsRequesting(() => false);
  };

  const updateUserDetails = (e) => {
    e.preventDefault();

    setIsRequesting(() => true);
    axios
      .patch(
        `${LOCAL_SERVER_URL}/api/users/${user.id}`,
        { name, email },
        { headers: { 'Content-Type': 'application/json' } }
      )
      .then(({ data }) => {
        dispatch(authActions.updateUser(data.user));
        setIsEditing(() => false);
      })
      .catch((err) => console.log(err));

    setIsRequesting(() => false);
  };

  const handleStartEditing = () => {
    setIsEditing(() => true);
    nameRef.current.focus();
  };

  const cancelEditing = () => {
    setName(() => user.name);
    setEmail(() => user.email);
    setIsEditing(() => false);
  };

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className='profile-details'>
      {isRequesting && <Spinner />}
      <div className='avatar'>
        <img
          src={`${LOCAL_SERVER_URL}/${
            user.avatar || 'uploads/images/default-avatar.jpeg'
          }`}
          crossOrigin='anonymous'
          alt='User avatar'
        />
        <BiImage />
      </div>
      <div className='info'>
        <h4>my profile</h4>
        <form>
          <div className='name'>
            <label htmlFor='name'>name</label>
            <input
              ref={nameRef}
              type='text'
              name='name'
              id='name'
              value={name}
              onChange={nameChangeHandler}
              readOnly={!isEditing}
            />
          </div>
          <div className='email'>
            <label htmlFor='email'>email</label>
            <input
              type='email'
              name='email'
              id='email'
              value={email}
              onChange={emailChangeHandler}
              readOnly={!isEditing}
            />
          </div>
          <div className='actions'>
            <FiEdit
              className='edit'
              color={isEditing ? 'green' : 'inherit'}
              onClick={handleStartEditing}
            />

            {isEditing && (
              <div className='buttons'>
                <button
                  type='button'
                  id='cancel-btn'
                  title='Discard changes'
                  onClick={cancelEditing}
                >
                  cancel
                </button>
                <button
                  type='submut'
                  title='Save changes'
                  id='submit-btn'
                  onClick={updateUserDetails}
                >
                  save
                </button>
              </div>
            )}
          </div>
        </form>

        {/* <p>bookmarks: {user.bookmarks.length}</p> */}
      </div>
      <button
        className='logout'
        type='button'
        onClick={logoutClickHandler}
      >
        Logout
        <HiOutlineLogout className='icon' />
      </button>
    </div>
  );
};

export default ProfileDetails;
