import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Header from '../components/Header/Header';

import Directions from '../components/Tutorial/Directions/Directions';
import Equipment from '../components/Tutorial/Equipment';
import Ingredients from '../components/Tutorial/Ingredients/Ingredients';
import Nutrition from '../components/Tutorial/Nutritions/Nutritions';
import Recommended from '../components/Tutorial/Recommended';
import Timing from '../components/Tutorial/Timing';
import Tips from '../components/Tutorial/Tips';
import Video from '../components/Tutorial/Video';

import Container from '../components/UI/Container';
import useTutorial from '../hooks/useTutorial';

const Tutorial = () => {
  const params = useParams();
  const { recipeId } = params;
  const [searchTutorial, isLoading] = useTutorial();
  const tutorial = useSelector(
    (state) => state.recipes.tutorialResult
  );

  useEffect(() => {
    const fetchTutorial = async () => {
      await searchTutorial(recipeId);
    };

    fetchTutorial();
  }, []);

  const {
    id,
    title,
    image,
    servings,
    healthScore,
    summary,
    prepTime,
    cookTime,
    sourceUrl,
    weightWatcherPoints,
    instructions,
    ingredients,
    equipments,
    video,
  } = tutorial;
  // console.log(tutorial);
  return (
    <>
      <Container className='tutorial-header'>
        <Header />
        <h2 className='title'>{title}</h2>
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
          <Nutrition isLoading={isLoading} />
          <Tips isLoading={isLoading} />
          <Equipment equipments={equipments} isLoading={isLoading} />
          <Ingredients
            ingredients={ingredients}
            isLoading={isLoading}
          />
        </div>
        <Recommended isLoading={isLoading} />
      </Container>
    </>
  );
};

export default Tutorial;
