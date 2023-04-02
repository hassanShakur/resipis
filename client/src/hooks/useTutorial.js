// * ======= Third Party Components ======= */
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { YOUTUBE_URL } from '../config/config';

//? ======== Local Components ========== */
import { recipeActions } from '../store/recipes-slice';
import FetchRecipes from '../utils/FetchRecipes';
import { API_KEY, BASE_URL } from '../config/config';

const useTutorial = (recipeId) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState({});

  const searchTutorial = useCallback(async () => {
    const URL = `${BASE_URL}/${recipeId}/information?includeNutrition=true&${API_KEY}`;

    try {
      setIsLoading(() => true);
      let recipe = await FetchRecipes(URL);
      // console.log(recipe.nutrition.nutrients);

      recipe = {
        id: recipe.id,
        title: recipe.title,
        image: recipe.image,
        servings: recipe.servings,
        healthScore: recipe.healthScore,
        summary: recipe.summary,
        prepTime: recipe.readyInMinutes,
        cookTime: recipe.cookingMinutes,
        sourceUrl: recipe.sourceUrl,
        nutrition: recipe.nutrition.nutrients,
        instructions: recipe.analyzedInstructions[0]?.steps.map(
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

      // Search and set video
      const VIDEO_URL = `${YOUTUBE_URL}&q=${recipe.title}`;

      const { items: videos } = await FetchRecipes(VIDEO_URL);
      let video = videos[0];

      if (video) {
        video = {
          id: video.id.videoId,
          title: recipe.title,
        };

        recipe.video = video;
      }
      // console.log(video.id.videoId);

      dispatch(recipeActions.setTutorialResult(recipe));
    } catch (err) {
      // console.error(err, '💥💥💥');
      setIsError(() => err);
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
