import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  suggestions: [],
  searchCompletions: [],
};

const recipeSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    createSuggestions(state, action) {
      state.suggestions = action.payload;
    },
    createSearchCompletions(state, action) {
      state.searchCompletions = action.payload;
    },
  },
});

export const recipeActions = recipeSlice.actions;

export default recipeSlice;
