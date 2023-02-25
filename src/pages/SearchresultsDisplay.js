// * ======= Third Party Components ======= */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';

//? ======== Local Components ========== */
import Header from '../components/Header/Header';
import SearchInput from '../components/Search/SearchInput';
import SingleSearchResult from '../components/Search/SingleSearchResult';
import Container from '../components/UI/Container';
import DisplayRecipes from '../components/UI/DisplayRecipes';
import Pagination from '../components/UI/Pagination';
import SkeletonHolder from '../components/UI/SkeletonHolder';
import useRecipes from '../hooks/useRecipes';

const SearchresultsDisplay = () => {
  const params = useParams();
  const { searchType, recipe } = params;
  const [searchRecipes, isLoading] = useRecipes();
  const [pageParams] = useSearchParams();

  useEffect(() => {
    const page = pageParams.get('page') || 1;
    if (!recipe) return;

    const getRecipes = async () => {
      await searchRecipes(searchType, recipe, page);
    };

    getRecipes();
  }, [recipe, pageParams]);

  const searchResults = useSelector(
    (state) => state.recipes.searchResults
  );

  return (
    <Container>
      <Header />
      <SearchInput />
      <section className='suggestions'>
        <h3>
          Results for <i>{recipe}</i>
        </h3>

        {isLoading ? (
          <SkeletonHolder limit='16' />
        ) : (
          <DisplayRecipes>
            {searchResults.map((recipe) => {
              return (
                <SingleSearchResult
                  recipe={recipe}
                  key={recipe.id}
                  isLoading={isLoading}
                />
              );
            })}
          </DisplayRecipes>
        )}
      </section>
      <Pagination lastPage={searchResults.lastPage} />
    </Container>
  );
};

export default SearchresultsDisplay;
