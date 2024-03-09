import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  password: "",
};

export const login = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUsername(state, action) {
      state.username = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    resetCredentials(state) {login
      state.username = "";
      state.password = "";
    },
  },
});
console.log(login);

export const { setUsername, setPassword, resetCredentials } = login.actions;

export default login.reducer; 