import React from 'react';
import { useSelector } from 'react-redux';

const ProfileBookmarks = () => {
  const bookmarks = useSelector((state) => state.auth.bookmarks);
  const firstFour = bookmarks.slice(0, 4);

  return <div className='profile-books'>ProfileBookmarks</div>;
};

export default ProfileBookmarks;
