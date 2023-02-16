import React from 'react';

const Search = () => {
  return (
    <form className='search-form'>
      <input
        type='text'
        name='search'
        id='search'
        placeholder='search'
      />
      <select name='sort' id='sort'>
        <option value='one'>one</option>
        <option value='two'>two</option>
        <option value='three'>three</option>
      </select>
    </form>
  );
};

export default Search;
