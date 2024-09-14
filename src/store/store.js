import { configureStore } from "@reduxjs/toolkit";
import { favoritesSlice } from "./favorites.slice";

export const store = configureStore({
  reducer: {
    favories: favoritesSlice,
  },
});

store.subscribe(() => {
  console.log(store.getState());
});
