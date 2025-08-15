import { configureStore } from "@reduxjs/toolkit";
import { fetchRobots, searchRobots } from "./reducers";

const store = configureStore({
  reducer: {
    searchRobots,
    fetchRobots
  },
});

export default store;
