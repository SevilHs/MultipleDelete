import { configureStore } from "@reduxjs/toolkit";
import usersDeleteReducer from "./usersDelete";


export const store = configureStore({
  reducer: {
    usersDelete:usersDeleteReducer
  },
});