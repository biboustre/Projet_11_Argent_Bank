import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    error: false,
    isAuthentificated: false,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload;
      state.isAuthentificated = true;
      state.error = false;
    },
    profileStore: (state, action) => {
      state.user = action.payload;
    },
    updateProfile: (state, action) => {
      state.user.userName = action.payload;
    },
    loginFailure: (state, action) => {
      state.error = action.payload;
      state.isAuthentificated = false;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.error = false;
      state.isAuthentificated = false;
    },
  },
});

export const selectAuth = (state) => state.auth.isAuthentificated;
export const selectUsername = (state) => state.auth.user?.userName;
export const selectLastname = (state) => state.auth.user?.lastName;
export const selectFirstname = (state) => state.auth.user?.firstName;
export const selectFullName = (state) =>
  state.auth.user
    ? state.auth.user.firstName + " " + state.auth.user.lastName
    : null;
export const selectError = (state) => state.auth.error?.message;
export const {
  loginFailure,
  loginSuccess,
  logout,
  profileStore,
  updateProfile,
} = authSlice.actions;
export default authSlice.reducer;
