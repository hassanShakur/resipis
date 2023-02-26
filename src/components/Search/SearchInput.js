// * ======= Third Party Components ======= */
import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';

//? ======== Local Components ========== */
import useSearchCompletion from '../../hooks/useSearchCompletion';
import SearchCompleter from './SearchCompleter';

const SearchInput = () => {
  const [searchInput, setSearchInput] = useState('');
  const [
    handleFormSubmit,
    setShowCompletions,
    showCompletions,
    isLoading,
  ] = useSearchCompletion(searchInput);
  const inputRef = useRef();

  const searchCompletions = useSelector(
    (state) => state.recipes.searchCompletions
  );

  const searchInputChangeHandler = (e) => {
    setSearchInput((_) => e.target.value);
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit();
  };

  return (
    <div className='search-input'>
      <h3>Discover Recipes</h3>
      <form onSubmit={handleInputSubmit}>
        <input
          type='text'
          placeholder='Search your favourite recipe'
          ref={inputRef}
          onChange={searchInputChangeHandler}
          value={searchInput}
          onFocus={() => {
            setShowCompletions(true);
          }}
          onBlur={() => {
            // setShowCompletions(false);
          }}
        />
      </form>

      <div className='completions'>
        {showCompletions &&
          searchCompletions.map((completion) => (
            <SearchCompleter
              completion={completion}
              setShowCompletions={setShowCompletions}
              setSearchInput={setSearchInput}
              isLoading={isLoading}
              key={completion.id}
            />
          ))}
      </div>
    </div>
  );
};

export default SearchInput;
