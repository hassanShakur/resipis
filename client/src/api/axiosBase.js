import axios from "axios";

export const axiosRandomBase = axios.create({
  baseURL: 'https://api.spoonacular.com/recipes/random',
});
