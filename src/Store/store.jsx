import { configureStore, createSlice } from "@reduxjs/toolkit";
// import userReducer  from "./UserSlice";

// const store = configureStore({
//     reducer: {
//         user: userReducer
//     }
// });

// export default store;


const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    user: null,
  },
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});