
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice"; // Adjust path if necessary

export const store = configureStore({
  reducer: { counter: counterReducer },
});
