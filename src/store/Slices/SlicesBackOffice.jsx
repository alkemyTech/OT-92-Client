import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
//import axios from "axios";

const menuInitial = {
  list: [],
  status: "idle",
  error: null
};

export const getSlicesApi = createAsyncThunk("slices/getSlicesApi", async () => {
  const response = await axios.get("http://ongapi.alkemy.org/api/categories");
  return response.data;
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
        state.list = state.list.concat(action.payload);
      })
      .addCase(getSlicesApi.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        alert(state.error);
      });
  }
});

export default sliceBackOffice.reducer;
