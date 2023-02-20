import React from 'react';

const SearchInput = () => {
  return (
    <div className='search-input'>
      <h3>Discover Recipes</h3>
      <form>
        <input
          type='text'
          placeholder='Search your favourite recipe'
        />
      </form>
    </div>
  );
};

export default SearchInput;
