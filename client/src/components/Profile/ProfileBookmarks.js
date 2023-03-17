import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BOOKMARKS_PER_PAGE } from '../../config/config';
import useIsLoading from '../../hooks/useIsLoading';
import { TbBookmarksOff } from 'react-icons/tb';
import Spinner from '../UI/Spinner';
import Bookmark from './Bookmark';

const ProfileBookmarks = () => {
  const navigate = useNavigate();
  const bookmarks = useSelector((state) => state.auth.bookmarks);
  const firstBookmarks = bookmarks.slice(0, BOOKMARKS_PER_PAGE);
  let [isLoading, imageLoadedHandler] = useIsLoading(
    false,
    firstBookmarks
  );
  if (bookmarks.length === 0) isLoading = false;

  const handleAllBooksClick = () => {
    navigate(`/profile/bookmarks`);
  };

  const mappedBookmarks = firstBookmarks.map((bookmark) => {
    return (
      <Bookmark
        bookmark={bookmark.recipe}
        imageLoadedHandler={imageLoadedHandler}
        key={bookmark.recipe.id}
      />
    );
  });

  const content =
    firstBookmarks.length === 0 ? (
      <div className='no-content'>
        <TbBookmarksOff className='icon' />

        <p>
          You have no bookmarks! <br /> Add some and they will appear
          here.
        </p>
      </div>
    ) : (
      mappedBookmarks
    );

  return (
    <div className='profile-books'>
      <div className='header'>
        <h3>my bookmarks</h3>
        <button
          className='see-all'
          type='button'
          onClick={handleAllBooksClick}
        >
          see all
        </button>
      </div>

      <div className='bookmarks '>
        {isLoading && <Spinner />}
        {content}
      </div>
    </div>
  );
};

export default ProfileBookmarks;
