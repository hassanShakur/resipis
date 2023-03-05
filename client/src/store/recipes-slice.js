// * ======= Third Party Components ======= */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  suggestions: [],
  searchCompletions: [],
  searchResults: [],
  searchQuery: '',
  tutorialResult: {},
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
    createSearchResults(state, action) {
      state.searchResults = action.payload;
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
    setTutorialResult(state, action) {
      state.tutorialResult = action.payload;
    },
  },
});

export const recipeActions = recipeSlice.actions;

export default recipeSlice;
