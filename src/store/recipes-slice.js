import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  randomSuggestions: [],
};

const recipeSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    createSuggestions(state, action) {
      state.randomSuggestions = action.payload;
    },
  },
});

export const recipeActions = recipeSlice.actions;

export default recipeSlice;
