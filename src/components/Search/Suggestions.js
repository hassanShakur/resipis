import React, { useEffect } from 'react';
import Suggestion from './Suggestion';

import { useSelector } from 'react-redux';
import useRandom from '../../hooks/useRandom';
import DisplayRecipes from '../UI/DisplayRecipes';
import CustomSkeleton from '../UI/CustomSkeleton';
import { useNavigate } from 'react-router-dom';
import Pagination from '../UI/Pagination';

const Suggestions = () => {
  const navigate = useNavigate();
  const [getRandomRecipes, isLoading] = useRandom();

  useEffect(() => {
    const getSuggestions = async () => {
      await getRandomRecipes(4);
    };

    getSuggestions();
  }, []);

  const recipeSuggestions = useSelector(
    (state) => state.recipes.suggestions
  );

  const handleAllSuggClick = () => {
    navigate('/search/suggestions');
  };

  return (
    <section className='suggestions'>
      {isLoading ? (
        <CustomSkeleton height='10vh' width='25vw' />
      ) : (
        <div className='header'>
          <h3>Suggestions</h3>
          <button className='see-all' onClick={handleAllSuggClick}>
            see all
          </button>
        </div>
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
      <Pagination />
    </section>
  );
};

export default Suggestions;
