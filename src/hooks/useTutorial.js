// * ======= Third Party Components ======= */
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

//? ======== Local Components ========== */
import { recipeActions } from '../store/recipes-slice';
import FetchRecipes from '../utils/FetchRecipes';
import { API_KEY, BASE_URL } from '../utils/URLs';

const useTutorial = (recipeId) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const searchTutorial = useCallback(async () => {
    const URL = `${BASE_URL}/${recipeId}/information?includeNutrition=false&${API_KEY}`;

    try {
      setIsLoading(() => true);
      let recipe = await FetchRecipes(URL);
      // console.log(recipe);
      recipe = {
        id: recipe.id,
        title: recipe.title,
        image: recipe.image,
        servings: recipe.servings,
        healthScore: recipe.healthScore,
        summary: recipe.summary,
        prepTime: recipe.readyInMinutes,
        cookTime: recipe.cookingMinutes,
        source: recipe.sourceUrl,
        instructions: recipe.analyzedInstructions[0].steps.map(
          (step) => {
            return {
              number: step.number,
              desc: step.step,
              equipment: step.equipment,
              ingredients: step.ingredients,
            };
          }
        ),
        ingredients: recipe.extendedIngredients.map((ing) => {
          return {
            name: ing.nameClean,
            id: ing.id,
            amount: ing.amount,
            original: ing.original,
          };
        }),
        weightWatcherPoints: recipe.weightWatcherSmartPoints,
      };

      let equipmentsArray = recipe.instructions?.map((inst) => {
        return inst.equipment.map((item) => ({
          name: item.name,
          id: item.id,
        }));
      });

      let equipments = [];
      equipmentsArray.map((item) => {
        return item.map((eq) => {
          return equipments.push(eq);
        });
      });
      recipe.equipments = equipments;

      const VIDEO_URL = `https://api.spoonacular.com/food/videos/search?query=${recipe.title}&number=10&${API_KEY}`;
      const { videos } = await FetchRecipes(VIDEO_URL);

      let video = videos.reduce((views, video) => {
        return video.views > views ? video : views;
      }, 0);

      video = {
        title: video.shortTitle,
        id: video.youTubeId,
        thumbnail: video.thumbnail,
      };

      recipe.video = video;

      dispatch(recipeActions.setTutorialResult(recipe));
    } catch (err) {
      console.log(err);
      setIsError(true);
    }
    setIsLoading(() => false);
  }, [dispatch, recipeId]);

  const fetchTutorial = useCallback(async () => {
    await searchTutorial();
  }, [searchTutorial]);

  useEffect(() => {
    fetchTutorial();
  }, [fetchTutorial]);

  return [isLoading, isError];
};

export default useTutorial;
