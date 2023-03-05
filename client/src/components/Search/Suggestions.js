// * ======= Third Party Components ======= */
import React from 'react';
import Suggestion from './Suggestion';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

//? ======== Local Components ========== */
import DisplayRecipes from '../UI/DisplayRecipes';
import SkeletonHolder from '../UI/SkeletonHolder';
import useRandom from '../../hooks/useRandom';
import { RANDOM_RESULTS_PER_PAGE } from '../../config/config';
import useIsLoading from '../../hooks/useIsLoading';
import NetworkError from '../Error/NetworkError';

const Suggestions = () => {
  const navigate = useNavigate();
  const [isFetching, isError] = useRandom();

  const recipeSuggestions = useSelector(
    (state) => state.recipes.suggestions
  );

  const [isLoading, imageLoadedHandler, displayStyle] = useIsLoading(
    isFetching,
    recipeSuggestions
  );

  const handleAllSuggClick = () => {
    navigate('/search/suggestions');
  };

  if (isError.name) return <NetworkError error={isError} />;

  return (
    <section className='suggestions'>
      <div className='header'>
        <h3>Suggestions</h3>
        <button className='see-all' onClick={handleAllSuggClick}>
          see all
        </button>
      </div>
      {(isLoading || isFetching) && (
        <SkeletonHolder limit={RANDOM_RESULTS_PER_PAGE} />
      )}

      <DisplayRecipes
        className='content'
        isLoading={isLoading}
        style={{ display: displayStyle }}
      >
        {recipeSuggestions.map((suggestion) => {
          return (
            <Suggestion
              suggestion={suggestion}
              imageLoadedHandler={imageLoadedHandler}
              key={suggestion.id}
            />
          );
        })}
      </DisplayRecipes>
    </section>
  );
};

export default Suggestions;
