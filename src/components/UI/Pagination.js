import React, { useRef, useState } from 'react';

import {
  TbArrowBigRightLines,
  TbArrowBigRight,
  TbArrowBigLeftLines,
  TbArrowBigLeft,
} from 'react-icons/tb';

const Pagination = ({ lastPage }) => {
  const [page, setPage] = useState(1);
  const [referencePage, setReferencePage] = useState(1);
  const pageRef = useRef();

  const firstPageClickHandler = () => {
    setPage(() => 1);
  };

  const prevPageClickHandler = () => {
    setPage((prevPageState) => prevPageState - 1);
  };

  const pageInputHandler = (e) => {
    const inputPage = e.target.value;
    if (!inputPage) {
      setPage(() => '');
      return;
    }

    // const page = inputPage > lastPage ? lastPage : inputPage;
    setPage(() => inputPage);
  };

  const nextPageClickhandler = () => {
    setPage((prevPageState) => prevPageState + 1);
  };

  const lastPageClickHandler = () => {
    setPage(() => lastPage);
  };

  const pageSubmitHandler = (e) => {
    e.preventDefault();
    pageRef.current.blur();
    if (!page || +page === 0) {
      setPage(() => referencePage);
      return;
    }

    setReferencePage(() => page);
    console.log(page);
  };

  return (
    <div className='pagination'>
      <TbArrowBigLeftLines
        className='icon left'
        title='Start'
        onClick={firstPageClickHandler}
      />
      <TbArrowBigLeft
        className='icon left'
        title='Prev'
        onClick={prevPageClickHandler}
      />
      <form onSubmit={pageSubmitHandler}>
        <input
          type='text'
          className='page-num'
          onChange={pageInputHandler}
          value={page}
          ref={pageRef}
        />
      </form>
      <TbArrowBigRight
        className='icon right'
        title='Next'
        onClick={nextPageClickhandler}
      />
      <TbArrowBigRightLines
        className='icon right'
        title='End'
        onClick={lastPageClickHandler}
      />
    </div>
  );
};

export default Pagination;
