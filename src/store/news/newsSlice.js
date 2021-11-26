import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getNews = createAsyncThunk(
  "news/getNews",
  async (dispatch, getState) => {
    return await axios.get('http://ongapi.alkemy.org/api/news')
      .then((res) => res.data.data);
  }
);
export const newsSlice = createSlice({
  name: "news",
  initialState: {
    news: [],
    status: null,
  },
  reducers: {
    getNews: (state, action) => {
      state.news = [...state.news, action.payload];
    },
    addNews: (state, action) => {
      state.news = [...state.news, action.payload] ;
    },
  },
  extraReducers: {
    [getNews.pending]: (state, action) => {
      state.status = "loading";
    },
    [getNews.fulfilled]: (state, action) => {
      state.status = "success";
      state.news = state.news.concat(action.payload);
    },
    [getNews.rejected]: (state, action) => {
      state.status = "failed";
    }
  },
});
export const { addNews} = newsSlice.actions;
export default newsSlice.reducer;
export const addNewsAsync = newNews => dispatch => {
  setTimeout(() => {
    dispatch(addNews(newNews));
  }, 1000);
};
