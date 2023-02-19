import React, { useEffect } from 'react';

import Directions from '../components/Tutorial/Directions/Directions';
import Equipment from '../components/Tutorial/Equipment';
import Ingredients from '../components/Tutorial/Ingredients/Ingredients';
import Nutrition from '../components/Tutorial/Nutritions/Nutritions';
import Recommended from '../components/Tutorial/Recommended';
import Timing from '../components/Tutorial/Timing';
import Tips from '../components/Tutorial/Tips';
import Video from '../components/Tutorial/Video';

import Container from '../components/UI/Container';

const URL =
  'https://api.spoonacular.com/recipes/random?number=1&apiKey=d98e8989f48349e38f7bad430d139b47';

const Tutorial = () => {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch(URL);
  //       let data = await res.json();
  //       let { recipes } = data;
  //       recipes = recipes.map((recipe) => ({
  //         id: recipe.id,
  //         title: recipe.title,
  //         image: recipe.image,
  //         servings: recipe.servings,
  //         healthScore: recipe.healthScore,
  //         summary: recipe.summary,
  //         prepTime: recipe.readyInMinutes,
  //         cookTime: recipe.cookingMinutes,
  //         source: recipe.sourceUrl,
  //         instructions: recipe.analyzedInstructions[0].steps.map(
  //           (step) => {
  //             return {
  //               number: step.number,
  //               desc: step.step,
  //               equipment: step.equipment,
  //               ingredients: step.ingredients,
  //             };
  //           }
  //         ),
  //         ingredients: recipe.extendedIngredients.map((ing) => {
  //           return {
  //             name: ing.nameClean,
  //             id: ing.id,
  //             image: ing.image,
  //           };
  //         }),
  //         weightWatcherPoints: recipe.weightWatcherSmartPoints,
  //       }));

  //       console.log(recipes[0]);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchData();
  // }, []);
  return (
    <Container className='tutorial-container'>
      <Video />
      <Directions />
      <div className='tutorial-details'>
        <Timing />
        <Nutrition />
        <Tips />
        <Equipment />
        <Ingredients />
      </div>
      <Recommended />
    </Container>
  );
};

export default Tutorial;
