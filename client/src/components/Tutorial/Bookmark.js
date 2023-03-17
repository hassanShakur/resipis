import React, { useState } from 'react';
import { BsBookmarkPlus, BsBookmarkStarFill } from 'react-icons/bs';
import axios from 'axios';
import { LOCAL_SERVER_URL } from './../../config/config';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../UI/Spinner';
import { authActions } from '../../store/auth-slice';

const Bookmark = ({ recipe }) => {
  const dispatch = useDispatch();
  const [isRequesting, setIsRequesting] = useState(false);
  const userId = useSelector((state) => state.auth.user.id);
  const userBookmarks = useSelector((state) => state.auth.bookmarks);
  const recipeId = recipe.id;

  const wasBookmarked = userBookmarks.find((bk) => {
    return bk.recipe.id === recipeId;
  });
  const [isBookmarked, setIsBookmarked] = useState(wasBookmarked);

  // Update bookmarks
  const updateBookmarks = async () => {
    if (!userId) return;
    axios
      .get(`${LOCAL_SERVER_URL}/api/users/${userId}/bookmarks`)
      .then(({ data }) => {
        dispatch(authActions.setBookmarks(data.data.bookmarks));
      });
  };

  const addRecipeToBookmarksHandler = async () => {
    console.log('bookmarking...');
    if (!userId) return;
    try {
      setIsRequesting(() => true);
      const recipeData = {
        user: userId,
        recipe,
      };

      const headers = { 'Content-Type': 'application/json' };

      await axios.post(
        `${LOCAL_SERVER_URL}/api/bookmarks`,
        recipeData,
        {
          headers,
        }
      );
      await updateBookmarks();
      setIsRequesting(() => false);
    } catch (err) {
      console.log(err);
    }
    setIsBookmarked(() => true);
  };

  const deleteRecipeFromBookmarksHandler = async () => {
    const id = wasBookmarked.id;
    console.log('deleting...');
    try {
      setIsRequesting(() => true);
      await axios.delete(`${LOCAL_SERVER_URL}/api/bookmarks/${id}`);
      await updateBookmarks();
    } catch (err) {
      console.log(err);
    }
    setIsBookmarked(() => false);
    setIsRequesting(() => false);
  };

  const bookmark = isBookmarked ? (
    <BsBookmarkStarFill
      className='bookmark'
      title='Item Bookmarked'
      onClick={deleteRecipeFromBookmarksHandler}
    />
  ) : (
    <BsBookmarkPlus
      className='bookmark'
      title='Add to Bookmarks'
      onClick={addRecipeToBookmarksHandler}
    />
  );
  return <>{isRequesting ? <Spinner /> : bookmark}</>;
};

export default Bookmark;
