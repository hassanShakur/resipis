import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SearchCompleter = ({ completion }) => {
  const { title, id } = completion;
  const location = useLocation();
  return (
    <Link
      to={`${location.pathname}${id}`}
      className='completion-link'
    >
      <p>{title}</p>
    </Link>
  );
};

export default SearchCompleter;
