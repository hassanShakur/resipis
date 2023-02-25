// * ======= Third Party Components ======= */
import React, { useEffect } from 'react';
import Suggestion from './Suggestion';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

//? ======== Local Components ========== */
import DisplayRecipes from '../UI/DisplayRecipes';
import SkeletonHolder from '../UI/SkeletonHolder';
import useRandom from '../../hooks/useRandom';

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
      <div className='header'>
        <h3>Suggestions</h3>
        <button className='see-all' onClick={handleAllSuggClick}>
          see all
        </button>
      </div>

      {isLoading ? (
        <SkeletonHolder limit={16} />
      ) : (
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
      )}
    </section>
  );
};

export default Suggestions;
