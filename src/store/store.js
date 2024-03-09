import { configureStore } from "@reduxjs/toolkit";
import login from "../features/login";

const store = configureStore({
    reducer: {
        login
    }
});

export default store;


