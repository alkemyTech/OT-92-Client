/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {membersService} from "../../Services/privateApiService";

export const getMembers = createAsyncThunk(
  "members/getMembers",
  async (dispatch, getState) => {
    return await membersService.getMembers().then((res) => res.data.data);
  }
);
export const membersSlice = createSlice({
  name: "members",
  initialState: {
    members: [],
    status: null,
  },
  reducers: {
    getMembers: (state, action) => {
      state.members = [...state.members, action.payload];
    },
    addMember: (state, action) => {
      state.members = [...state.members, action.payload];
    },
  },
  extraReducers: {
    [getMembers.pending]: (state, action) => {
      state.status = "loading";
    },
    [getMembers.fulfilled]: (state, action) => {
      state.status = "success";
      state.members = action.payload;
    },
    [getMembers.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});
export const { addMember } = membersSlice.actions;
export default membersSlice.reducer;
export const addMemberAsync = (newMember) => (dispatch) => {
  setTimeout(() => {
    dispatch(addMember(newMember));
  }, 1000);
};
