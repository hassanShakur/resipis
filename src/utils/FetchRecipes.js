import axios from 'axios';
// import { axiosRandomBase } from '../api/axiosBase';

// const KEY = 'apiKey=d98e8989f48349e38f7bad430d139b47';

const URL =
  'https://api.spoonacular.com/recipes/random?number=24&apiKey=09908c6a4e7e49669b60317179a383e9';

const FetchRecipes = async () => {
  const res = await fetch(URL);

  //   const res = await axiosRandomBase.get(
  //     `/recipes/random?number=10&${KEY}`
  //   );
  let data = await res.json();
  let { recipes } = data;
  recipes = recipes.map((recipe) => ({
    id: recipe.id,
    title: recipe.title,
    image: recipe.image,
    cookTime:
      (recipe.cookingMinutes === -1 ? 0 : recipe.cookingMinutes) +
      recipe.readyInMinutes,
  }));

  return recipes;
};

export default FetchRecipes;
