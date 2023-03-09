// * ======= Third Party Components ======= */
import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: { currTheme: 'dark' },
  reducers: {
    toggle(state) {
      state.currTheme = state.currTheme === 'dark' ? 'light' : 'dark';
    },
  },
});

export const themeActions = themeSlice.actions;

export default themeSlice;
