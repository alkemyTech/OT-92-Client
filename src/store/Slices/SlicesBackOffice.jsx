import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
//import axios from "axios";

const menuInitial = {
  list: [],
  status: "idle",
  error: null
};

export const getSlicesApi = createAsyncThunk("slices/getSlicesApi", async () => {
  const response = await axios.get("http://ongapi.alkemy.org/api/slides"); 
  /* Este metodo axios.get será reemplazado por el servicio de slides slidesService("getAll") cuando se solucione el token de autorización 
  para crear las slides de nuestro grupo. Sino devuelve un array vacío y hay error porque no se pueden leer las props de un undefined. */
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
        console.log(state.error);
      });
  }
});

export default sliceBackOffice.reducer;
