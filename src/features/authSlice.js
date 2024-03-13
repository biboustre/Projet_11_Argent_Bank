import { createSlice } from "@reduxjs/toolkit";
import Login from "../pages/Login/Login";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    username: null,
    token: null,
    error: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.username = action.payload.username;
      state.token = action.payload.token;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.isAuthenticated = false;
      state.username = null;
      state.token = null;
      state.error = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.username = null;
      state.token = null;
      state.error = null;
    },
    login: (state, action) => {
     
    },
  },
});

export const { loginSuccess, loginFailure, logout, login } = authSlice.actions;

export const selectAuth = (state) => state.auth;

export default authSlice.reducer;
