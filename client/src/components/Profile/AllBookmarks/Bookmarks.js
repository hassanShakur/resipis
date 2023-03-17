import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../../Header/Header';
import SearchInput from '../../Search/SearchInput';
import Container from '../../UI/Container';
import Bookmark from '../Bookmark';

const Bookmarks = () => {
  let bookmarks = [...useSelector((state) => state.auth.bookmarks)];
  const [filteredBookmarks, setFilteredBookmarks] =
    useState(bookmarks);

  const filterBookmarks = (query) => {
    setFilteredBookmarks(() =>
      bookmarks.filter((bookmark) =>
        bookmark.recipe.title
          .toLowerCase()
          .includes(query.toLowerCase())
      )
    );
  };

  const mappedBookmarks = filteredBookmarks.map((bookmark) => {
    return (
      <Bookmark
        bookmark={bookmark.recipe}
        // imageLoadedHandler={imageLoadedHandler}
        key={bookmark.recipe.id}
      />
    );
  });
  return (
    <Container>
      <Header />
      <SearchInput
        title='my bookmarks'
        placeholder='Search your bookmarks'
        custom={true}
        filterBookmarks={filterBookmarks}
      />
      <div className='bookmarks all-bookmarks'>{mappedBookmarks}</div>
    </Container>
  );
};

export default Bookmarks;
