import { configureStore } from "@reduxjs/toolkit";
import { searchRobots } from "./reducers";

const store = configureStore({
  reducer: {
    searchRobots
  },
});

export default store;
