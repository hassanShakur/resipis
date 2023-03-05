// * ======= Third Party Components ======= */
import { Skeleton } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

//? ======== Local Components ========== */
import Header from '../components/Header/Header';
import Directions from '../components/Tutorial/Directions/Directions';
import Equipment from '../components/Tutorial/Equipment';
import Ingredients from '../components/Tutorial/Ingredients/Ingredients';
import Nutrition from '../components/Tutorial/Nutritions/Nutritions';
import Recommended from '../components/Tutorial/Recommended';
import Summary from '../components/Tutorial/Summary';
import Timing from '../components/Tutorial/Timing';
import Tips from '../components/Tutorial/Tips';
import Video from '../components/Tutorial/Video';
import Container from '../components/UI/Container';
import useTutorial from '../hooks/useTutorial';

const Tutorial = () => {
  const params = useParams();
  const { recipeId } = params;
  const [isLoading] = useTutorial(recipeId);
  const tutorial = useSelector(
    (state) => state.recipes.tutorialResult
  );

  // const fetchTutorial = useCallback(async () => {

  //   await searchTutorial(recipeId);
  // }, [params, searchTutorial]);

  // useCallback(fetchTutorial, [fetchTutorial]);

  // useEffect(() => {
  //   fetchTutorial();
  // }, []);

  const {
    // id,
    title,
    image,
    servings,
    // healthScore,
    summary,
    prepTime,
    cookTime,
    sourceUrl,
    // weightWatcherPoints,
    instructions,
    ingredients,
    equipments,
    video,
    nutrition,
  } = tutorial;

  return (
    <>
      <Container className='tutorial-header'>
        <Header />
        {isLoading ? (
          <Skeleton
            variant='text'
            height='8vh'
            width='40%'
            animation='wave'
            sx={{ bgcolor: 'var(--section-back)' }}
          />
        ) : (
          <h2 className='title'>{title}</h2>
        )}
      </Container>
      <Container className='tutorial-container'>
        <Video video={video} image={image} isLoading={isLoading} />
        <Directions
          instructions={instructions}
          isLoading={isLoading}
        />
        <div className='tutorial-details'>
          <Timing
            times={{ prepTime, cookTime, servings }}
            isLoading={isLoading}
          />
          <Nutrition isLoading={isLoading} nutrition={nutrition} />
          <Tips isLoading={isLoading} />
          <Equipment equipments={equipments} isLoading={isLoading} />
          <Ingredients
            ingredients={ingredients}
            isLoading={isLoading}
          />
        </div>
        {/* <Recommended isLoading={isLoading} /> */}
        <Summary summary={summary} sourceURL={sourceUrl} />
      </Container>
    </>
  );
};

export default Tutorial;
