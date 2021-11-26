import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getCategories = createAsyncThunk(
  "category/getCategories",
  async () => {
    const data = await axios.get("http://ongapi.alkemy.org/api/categories");
    return data.data;
  }
);

const initialState = {
  categories: [],
  category: {
    name: "",
    description: "",
    image: "",
  },
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  extraReducers: {
    [getCategories.succeeded]: (state, action) => {
      return state.categories + action.payload.data;
    },
  },
});

export default categorySlice.reducer;
