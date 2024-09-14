import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "./storage";

const initialState = {
  items: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: loadState("favorites") || initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.items.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.items = state.items.filter((item) => item !== action.payload);
    },
  },
});
