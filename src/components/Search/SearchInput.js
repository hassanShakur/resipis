import React from 'react';

const SearchInput = () => {
  return (
    <header>
      <h3>Discover Recipes</h3>
      <form>
        <input
          type='text'
          placeholder='Search your favourite recipe'
        />
      </form>
    </header>
  );
};

export default SearchInput;
