import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
//import axios from "axios";

const menuInitial = {
  list: [],
  status: "idle",
  error: null
};

export const getSlicesApi = createAsyncThunk("slices/getSlicesApi", async (prop) => {
  if(!prop){
    const response = await axios.get("http://ongapi.alkemy.org/api/slides");
    return response.data;
  }else{
    const response = await axios.get(`http://ongapi.alkemy.org/api/slides?search=${prop}`);
    return response.data;
  }
});

export const sliceBackOffice = createSlice({
  name: "backOffice",
  initialState: menuInitial,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getSlicesApi.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getSlicesApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Add any fetched posts to the array
        state.list={list:action.payload.data};
      })
      .addCase(getSlicesApi.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        alert(state.error);
      });
  }
});

export default sliceBackOffice.reducer;
