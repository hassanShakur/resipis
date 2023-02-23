import { useDispatch } from 'react-redux';
import { recipeActions } from '../store/recipes-slice';
import FetchRecipes from '../utils/FetchRecipes';
import { API_KEY, BASE_URL } from '../utils/URLs';

const useTutorial = () => {
  const dispatch = useDispatch();

  const searchTutorial = async (recipeId) => {
    const URL = `${BASE_URL}/${recipeId}/information?includeNutrition=false&${API_KEY}`;

    try {
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
          equipments.push(eq);
        });
      });
      recipe.equipments = equipments;

      const VIDEO_URL = `https://api.spoonacular.com/food/videos/search?query=${recipe.title}&number=1&${API_KEY}`;
      let video = await FetchRecipes(VIDEO_URL);
      console.log(video);
      video = {
        title: video.shortTitle,
        id: video.youtubeId,
        thumbnail: video.thumbnail,
      };

      dispatch(recipeActions.setTutorialResult(recipe));
    } catch (err) {
      console.log(err);
    }
  };

  return [searchTutorial];
};

export default useTutorial;
