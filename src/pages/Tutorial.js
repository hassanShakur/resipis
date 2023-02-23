import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

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
  const [searchTutorial] = useTutorial();
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
  } = tutorial;

  return (
    <Container className='tutorial-container'>
      <Video />
      <Directions instructions={instructions} />
      <div className='tutorial-details'>
        <Timing times={{ prepTime, cookTime, servings }} />
        <Nutrition />
        <Tips />
        <Equipment />
        <Ingredients ingredients={ingredients} />
      </div>
      <Recommended />
    </Container>
  );
};

export default Tutorial;
