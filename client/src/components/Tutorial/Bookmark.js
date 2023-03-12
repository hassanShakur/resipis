import React, { useEffect, useState } from 'react';
import { BsBookmarkPlus, BsBookmarkStarFill } from 'react-icons/bs';
import axios from 'axios';
import { LOCAL_SERVER_URL } from './../../config/config';
import { useSelector } from 'react-redux';
import Spinner from '../UI/Spinner';

const Bookmark = ({ recipe }) => {
  const [isRequesting, setIsRequesting] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const userId = useSelector((state) => state.auth.user.id);
  const userBookmarks = useSelector((state) => state.auth.bookmarks);
  const recipeId = recipe.id;

  // Check if bookmarked
  useEffect(() => {
    if (!userBookmarks) return;
    const currRecipe = userBookmarks.find((bk) => {
      return +bk.resipisId === recipeId;
    });
    if (currRecipe) setIsBookmarked(() => true);
  }, [recipeId, userBookmarks]);

  const addRecipeToBookmarksHandler = async () => {
    setIsBookmarked(() => true);
    if (!userId) return;
    try {
      setIsRequesting(() => true);
      const recipeData = {
        user: userId,
        recipe,
      };

      const headers = { 'Content-Type': 'application/json' };

      axios.post(`${LOCAL_SERVER_URL}/api/bookmarks`, recipeData, {
        headers,
      });
    } catch (err) {
      console.log(err);
    }
    setIsRequesting(() => false);
  };

  const bookmark = isBookmarked ? (
    <BsBookmarkStarFill
      className='bookmark'
      title='Item Bookmarked'
      onClick={addRecipeToBookmarksHandler}
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
