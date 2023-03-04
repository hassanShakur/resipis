// * ======= Third Party Components ======= */
import React, { useRef, useState } from 'react';
import Suggestion from './Suggestion';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

//? ======== Local Components ========== */
import DisplayRecipes from '../UI/DisplayRecipes';
import SkeletonHolder from '../UI/SkeletonHolder';
import useRandom from '../../hooks/useRandom';
import { RANDOM_RESULTS_PER_PAGE } from '../../config/config';

const Suggestions = () => {
  const navigate = useNavigate();
  useRandom();
  const [isLoading, setIsLoading] = useState(true);
  const loadedImages = useRef(0);

  const recipeSuggestions = useSelector(
    (state) => state.recipes.suggestions
  );

  const imagesLoaded = () => {
    ++loadedImages.current;
    // console.log(loadedImages.current);
    if (recipeSuggestions.length === loadedImages.current) {
      setIsLoading(() => false);
    }
    if (loadedImages.current >= recipeSuggestions.length) {
      loadedImages.current = 0;
    }
  };

  const handleAllSuggClick = () => {
    navigate('/search/suggestions');
  };

  const display = isLoading ? 'none' : '';

  return (
    <section className='suggestions'>
      <div className='header'>
        <h3>Suggestions</h3>
        <button className='see-all' onClick={handleAllSuggClick}>
          see all
        </button>
      </div>
      {isLoading && (
        <SkeletonHolder limit={RANDOM_RESULTS_PER_PAGE} />
      )}

      <DisplayRecipes
        className='content'
        isLoading={isLoading}
        style={{ display: display }}
      >
        {recipeSuggestions.map((suggestion) => {
          return (
            <Suggestion
              suggestion={suggestion}
              imagesLoaded={imagesLoaded}
              key={suggestion.id}
            />
          );
        })}
      </DisplayRecipes>
    </section>
  );
};

export default Suggestions;
