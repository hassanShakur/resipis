// * ======= Third Party Components ======= */
import React from 'react';
import { useSelector } from 'react-redux';
import useRandom from '../hooks/useRandom';

//? ======== Local Components ========== */
import DisplayRecipes from '../components/UI/DisplayRecipes';
import Suggestion from '../components/Search/Suggestion';
import Container from '../components/UI/Container';
import Header from '../components/Header/Header';
import SearchInput from '../components/Search/SearchInput';
import SkeletonHolder from '../components/UI/SkeletonHolder';
import Pagination from '../components/UI/Pagination';

const AllSuggestions = () => {
  const [isLoading] = useRandom(8);

  const recipeSuggestions = useSelector(
    (state) => state.recipes.suggestions
  );

  return (
    <Container>
      <Header />
      <SearchInput />
      <section className='suggestions'>
        <div className='header'>
          <h3>Suggestions</h3>
        </div>

        {isLoading ? (
          <SkeletonHolder limit={20} />
        ) : (
          <DisplayRecipes className='content'>
            {recipeSuggestions.map((suggestion) => {
              return (
                <Suggestion
                  suggestion={suggestion}
                  key={suggestion.id}
                />
              );
            })}
          </DisplayRecipes>
        )}
      </section>
      <Pagination lastPage={100} />
    </Container>
  );
};

export default AllSuggestions;
