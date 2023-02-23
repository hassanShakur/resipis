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

      dispatch(recipeActions.setTutorialResult(recipe));
    } catch (err) {
      console.log(err);
    }
  };

  return [searchTutorial];
};

export default useTutorial;
