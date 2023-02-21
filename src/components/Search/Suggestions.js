import React, { useEffect } from 'react';
import Suggestion from './Suggestion';

import useRecipes from '../../hooks/useRecipes';
import { useSelector } from 'react-redux';

const Suggestions = () => {
  const [getRandomRecipes] = useRecipes();
  useEffect(() => {
    getRandomRecipes();
  }, []);

  const recipeSuggestions = useSelector(
    (state) => state.recipes.suggestions
  );
  // console.log(data);

  return (
    <section className='suggestions'>
      <h3>Suggestions</h3>

      <div className='content'>
        {recipeSuggestions.map((suggestion, id) => {
          return <Suggestion suggestion={suggestion} key={id} />;
        })}
      </div>
    </section>
  );
};

export default Suggestions;
