import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import { authMiddleware } from "./features/authMiddleware";

const store = configureStore({
  reducer: {
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    authMiddleware,

],
});

export default store;
