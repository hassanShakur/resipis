import React, { useEffect } from 'react';
import Suggestion from './Suggestion';

import { useSelector } from 'react-redux';
import useRandom from '../../hooks/useRandom';

const Suggestions = () => {
  const [getRandomRecipes] = useRandom();
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
    <section className='suggestions'>
      <h3>Suggestions</h3>

      <div className='content'>
        {recipeSuggestions.map((suggestion) => {
          return (
            <Suggestion suggestion={suggestion} key={suggestion.id} />
          );
        })}
      </div>
    </section>
  );
};

export default Suggestions;
