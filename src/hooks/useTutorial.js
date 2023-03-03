// * ======= Third Party Components ======= */
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { SIMILAR_RESULTS_NUM, YOUTUBE_URL } from '../config/config';

//? ======== Local Components ========== */
import { recipeActions } from '../store/recipes-slice';
import FetchRecipes from '../utils/FetchRecipes';
import { API_KEY, BASE_URL } from '../config/config';

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
      // console.log(video.id.videoId);

      video = {
        id: video.id.videoId,
        title: recipe.title,
      };

      recipe.video = video;

      // Search and set similar recipes
      const SIMILAR_VIDEOS_URL = `${BASE_URL}/${recipe.id}/similar?number=${SIMILAR_RESULTS_NUM}&${API_KEY}`;
      //api.spoonacular.com/recipes/{id}/similar
      const similarRecipes = await FetchRecipes(SIMILAR_VIDEOS_URL);
      console.log(similarRecipes);

      dispatch(recipeActions.setTutorialResult(recipe));
    } catch (err) {
      console.error(err, '💥💥💥');
      setIsError(true);
      throw err;
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
