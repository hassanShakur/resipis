import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  suggestions: [],
};

const recipeSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    createSuggestions(state, action) {
      state.suggestions = action.payload;
    },
  },
});

export const recipeActions = recipeSlice.actions;

export default recipeSlice;
