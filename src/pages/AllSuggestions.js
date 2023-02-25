import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useRandom from '../hooks/useRandom';
import DisplayRecipes from '../components/UI/DisplayRecipes';
import Suggestion from '../components/Search/Suggestion';
import Container from '../components/UI/Container';
import Header from '../components/Header/Header';
import SearchInput from '../components/Search/SearchInput';

const AllSuggestions = () => {
  const navigate = useNavigate();
  const [getRandomRecipes, isLoading] = useRandom();

  useEffect(() => {
    const getSuggestions = async () => {
      await getRandomRecipes(8);
    };

    getSuggestions();
  }, []);

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

        <DisplayRecipes className='content' isLoading={isLoading}>
          {recipeSuggestions.map((suggestion) => {
            return (
              <Suggestion
                suggestion={suggestion}
                key={suggestion.id}
                isLoading={isLoading}
              />
            );
          })}
        </DisplayRecipes>
      </section>
    </Container>
  );
};

export default AllSuggestions;
