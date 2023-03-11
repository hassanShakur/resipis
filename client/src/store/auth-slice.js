import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  user: {},
  bookmarks: {},
  token: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    logout(state) {
      state.user = {};
      state.bookmarks = {};
      state.isLoggedIn = false;
    },
    setBookmarks(state, action) {
      state.bookmarks = action.payload;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
