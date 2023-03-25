// * ======= Third Party Components ======= */
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import NetworkError from '../components/Error/NetworkError';

//? ======== Local Components ========== */
import Header from '../components/Header/Header';
import SearchInput from '../components/Search/SearchInput';
import SingleSearchResult from '../components/Search/SingleSearchResult';
import Container from '../components/UI/Container';
import DisplayRecipes from '../components/UI/DisplayRecipes';
import Pagination from '../components/UI/Pagination';
import SkeletonHolder from '../components/UI/SkeletonHolder';
import { SEARCH_RESULTS_PER_PAGE } from '../config/config';
import useIsLoading from '../hooks/useIsLoading';
import useRecipes from '../hooks/useRecipes';

const SearchResultsDisplay = () => {
  const params = useParams();
  const { searchType, recipe } = params;
  const [pageParams] = useSearchParams();
  const page = pageParams.get('page') || 1;
  const [isFetching, isError] = useRecipes(searchType, recipe, page);

  const searchResults = useSelector(
    (state) => state.recipes.searchResults
  );

  const [isLoading, imageLoadedHandler, displayStyle] = useIsLoading(
    isFetching,
    searchResults
  );

  let resultsContent;
  if (searchResults.length < 1) {
    resultsContent = 'No recipes fouund that match your sarch!';
  } else {
    resultsContent = searchResults.map((recipe) => {
      return (
        <SingleSearchResult
          recipe={recipe}
          imageLoadedHandler={imageLoadedHandler}
          key={recipe.id}
        />
      );
    });
  }

  const content = isError.name ? (
    <NetworkError error={isError} />
  ) : (
    <>
      <section className='suggestions'>
        <h3>
          Results for <i>{recipe}</i>
        </h3>

        {(isLoading || isFetching) && (
          <SkeletonHolder limit={SEARCH_RESULTS_PER_PAGE} />
        )}
        <DisplayRecipes style={{ display: displayStyle }}>
          {resultsContent}
        </DisplayRecipes>
      </section>
      <Pagination lastPage={searchResults.lastPage} />
    </>
  );

  return (
    <Container>
      <Header />
      <SearchInput />
      {content}
    </Container>
  );
};

export default SearchResultsDisplay;
