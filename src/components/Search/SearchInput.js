import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import useSearchCompletion from '../../hooks/useSearchCompletion';
import SearchCompleter from './SearchCompleter';

const SearchInput = () => {
  const [getCompletions] = useSearchCompletion();
  const inputRef = useRef();
  const searchCompletions = useSelector(
    (state) => state.recipes.searchCompletions
  );

  const [searchInput, setSearchInput] = useState('');

  const searchInputChangeHandler = async (e) => {
    setSearchInput((_) => e.target.value);
  };

  useEffect(() => {
    if (searchInput.length < 1) return;

    const timeoutId = setTimeout(async () => {
      await getCompletions(searchInput);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchInput]);

  return (
    <div className='search-input'>
      <h3>Discover Recipes</h3>
      <form>
        <input
          type='text'
          placeholder='Search your favourite recipe'
          ref={inputRef}
          onChange={searchInputChangeHandler}
          value={searchInput}
        />
      </form>
      <div className='completions'>
        {searchCompletions.map((completion) => (
          <SearchCompleter
            completion={completion}
            key={completion.id}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchInput;
