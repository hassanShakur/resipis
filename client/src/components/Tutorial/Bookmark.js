import React, { useEffect, useState } from 'react';
import { BsBookmarkPlus, BsBookmarkStarFill } from 'react-icons/bs';
import axios from 'axios';
import { LOCAL_SERVER_URL } from './../../config/config';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../UI/Spinner';
import { authActions } from '../../store/auth-slice';

const Bookmark = ({ recipe }) => {
  const dispatch = useDispatch();
  const [isRequesting, setIsRequesting] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const userId = useSelector((state) => state.auth.user.id);
  const userBookmarks = useSelector((state) => state.auth.bookmarks);
  const recipeId = recipe.id;

  //   const wasBookmarked = userBookmarks.find((bk) => {
  //     return +bk.resipisId === recipeId;
  //   });

  //   useState(() => {
  //     if (wasBookmarked) setIsBookmarked(() => true);
  //   }, []);

  // Update bookmarks
  useEffect(() => {
    if (!userId) return;
    axios
      .get(`${LOCAL_SERVER_URL}/api/users/${userId}/bookmarks`)
      .then(({ data }) => {
        dispatch(authActions.setBookmarks(data.data.bookmarks));
      });
  }, [dispatch, userId]);

  //   console.log(wasBookmarked);
  useEffect(() => {
    return async () => {
      if (isBookmarked) {
        const wasBookmarked = userBookmarks.find((bk) => {
          return +bk.resipisId === recipeId;
        });

        if (wasBookmarked) return;
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
          setIsRequesting(() => false);
        } catch (err) {
          console.log(err);
        }
      } else if (!isBookmarked) {
        const wasBookmarked = userBookmarks.find((bk) => {
          return +bk.resipisId === recipeId;
        });

        if (!wasBookmarked) return;
        const id = wasBookmarked.id;
        console.log('deleting...', wasBookmarked);
        try {
          setIsRequesting(() => true);
          await axios.delete(
            `${LOCAL_SERVER_URL}/api/bookmarks/${id}`
          );
          setIsRequesting(() => false);
        } catch (err) {
          console.log(err);
        }
      }
    };
  }, [isBookmarked, recipe, recipeId, userBookmarks, userId]);

  const addRecipeToBookmarksHandler = () => {
    setIsBookmarked(() => true);
  };

  const deleteRecipeFromBookmarksHandler = () => {
    setIsBookmarked(() => false);
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
