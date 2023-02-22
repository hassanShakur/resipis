import React from 'react';
import { Link } from 'react-router-dom';

const SearchCompleter = ({ completion }) => {
  const { title } = completion;

  const handler = () => {};
  return (
    <Link
      to={`/search?recipe=${title}`}
      className='completion-link'
      onClick={handler}
    >
      <p>{title}</p>
    </Link>
  );
};

export default SearchCompleter;
