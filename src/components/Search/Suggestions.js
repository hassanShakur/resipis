import React, { useEffect } from 'react';
import Suggestion from './Suggestion';

import { useSelector } from 'react-redux';
import useRandom from '../../hooks/useRandom';
import DisplayRecipes from '../UI/DisplayRecipes';
import CustomSkeleton from '../UI/CustomSkeleton';

const Suggestions = () => {
  const [getRandomRecipes, isLoading] = useRandom();

  useEffect(() => {
    const getSuggestions = async () => {
      await getRandomRecipes();
    };

    getSuggestions();
  }, []);

  const recipeSuggestions = useSelector(
    (state) => state.recipes.suggestions
  );

  return (
    <>
      <section className='suggestions'>
        {isLoading ? (
          <CustomSkeleton height='10vh' width='25vw' />
        ) : (
          <h3>Suggestions</h3>
        )}

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

      <DisplayRecipes />
    </>
  );
};

export default Suggestions;
