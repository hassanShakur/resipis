import React from 'react';

const SearchCompleter = ({ completion }) => {
  const { title } = completion;
  return <p>{title}</p>;
};

export default SearchCompleter;
