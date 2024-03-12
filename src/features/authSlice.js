// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   username: "",
//   password: "",
// };

// export const login = createSlice({
//   name: "login",
//   initialState,
//   reducers: {
//     setUsername(state, action) {
//       state.username = action.payload;
//     },
//     setPassword(state, action) {
//       state.password = action.payload;
//     },
//     resetCredentials(state) {
//       state.username = "";
//       state.password = "";
//     },
//   },
// });
// console.log(login);

// export const { setUsername, setPassword, resetCredentials } = login.actions;

// export default login.reducer; 

import { createSlice } from "@reduxjs/toolkit";

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
  },
});

export const { loginSuccess, loginFailure, logout } = authSlice.actions;

export const selectAuth = (state) => state.auth;

export default authSlice.reducer;