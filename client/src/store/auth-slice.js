import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  user: {},
  bookmarks: [],
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logout(state) {
      state.user = {};
      state.bookmarks = [];
      state.isLoggedIn = false;
    },
    setBookmarks(state, action) {
      state.bookmarks = action.payload;
    },
    updateUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
