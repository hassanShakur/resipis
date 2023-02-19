import { configureStore } from '@reduxjs/toolkit';

import themeSlice from './theme-slice';

const rootReducer = {
  theme: themeSlice.reducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
