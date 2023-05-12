import { configureStore } from "@reduxjs/toolkit";
import players from "./reducers/players";

const store = configureStore({
  reducer: {
    players: players,
  },
});

export default store;
