import React, { useRef, useState } from 'react';

import {
  TbArrowBigRightLines,
  TbArrowBigRight,
  TbArrowBigLeftLines,
  TbArrowBigLeft,
} from 'react-icons/tb';
import { useSearchParams } from 'react-router-dom';

const Pagination = ({ lastPage }) => {
  const [page, setPage] = useState(1);
  const [referencePage, setReferencePage] = useState(1);
  const pageRef = useRef();
  const [pageParams, setPageParams] = useSearchParams({ page: 1 });

  const firstPageClickHandler = () => {
    setPage(() => 1);
  };

  const prevPageClickHandler = () => {
    setPage((prevPageState) => {
      if (!prevPageClickHandler > 0) {
        return;
      } else {
        return +prevPageState - 1;
      }
    });
    let prevPage = page;
    prevPage--;
    setPageParams(() => ({ page: prevPage }));
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
    setPage((prevPageState) => +prevPageState + 1);
    let nextPage = page;
    nextPage++;
    setPageParams(() => ({ page: nextPage }));
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
    // console.log(page);
    setPageParams(() => ({
      page,
    }));
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
