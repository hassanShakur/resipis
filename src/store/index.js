// * ======= Third Party Components ======= */
import { configureStore } from '@reduxjs/toolkit';

//? ======== Local Components ========== */
import themeSlice from './theme-slice';
import recipeSlice from './recipes-slice';

const rootReducer = {
  theme: themeSlice.reducer,
  recipes: recipeSlice.reducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
