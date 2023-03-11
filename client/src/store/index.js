// * ======= Third Party Components ======= */
import { configureStore } from '@reduxjs/toolkit';

//? ======== Local Components ========== */
import authSlice from './auth-slice';
import themeSlice from './theme-slice';
import recipeSlice from './recipes-slice';

const rootReducer = {
  auth: authSlice.reducer,
  theme: themeSlice.reducer,
  recipes: recipeSlice.reducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
