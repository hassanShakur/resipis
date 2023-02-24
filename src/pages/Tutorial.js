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
    equipments,
    video,
  } = tutorial;
  // console.log(tutorial);
  return (
    <>
      <Container>
        <Header />
      </Container>
      <Container className='tutorial-container'>
        <Video video={video} image={image} />
        <Directions instructions={instructions} />
        <div className='tutorial-details'>
          <Timing times={{ prepTime, cookTime, servings }} />
          <Nutrition />
          <Tips />
          <Equipment equipments={equipments} />
          <Ingredients ingredients={ingredients} />
        </div>
        <Recommended />
      </Container>
    </>
  );
};

export default Tutorial;
