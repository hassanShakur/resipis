// * ======= Third Party Components ======= */
import React, { useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
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
  const [pageParams, setPageParams] = useSearchParams({ page: 1 });

  const firstPageClickHandler = () => {
    setPageParams(() => ({ page: 1 }));
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

    const page = inputPage > lastPage ? lastPage : inputPage;
    setPage(() => page);
  };

  const nextPageClickhandler = () => {
    setPage((prevPageState) => +prevPageState + 1);
    let nextPage = page;
    nextPage++;
    setPageParams(() => ({ page: nextPage }));
  };

  const lastPageClickHandler = () => {
    setPageParams(() => ({ page: lastPage }));
    setPage(() => lastPage);
  };

  const pageSubmitHandler = (e) => {
    e.preventDefault();
    console.log(pageParams);
    pageRef.current.blur();
    if (!page || +page === 0) {
      setPage(() => referencePage);
      return;
    }

    setReferencePage(() => page);
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
