import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getActivities = createAsyncThunk(
  'activity/getActivities',
  async () => {
    const data = await axios.get('http://ongapi.alkemy.org/api/activities');
    return data.data;
  }
);

const activitySlice = createSlice({
  name: 'activity',
  initialState: {
    activities: [],
    activity: {},
    loading: false,
    error: null,
  },
  extraReducers: {
    [getActivities.fulfilled]: (state, action) => {
      state.activities = action.payload.data;
    },
    [getActivities.pending]: (state, action) => {
      state.loading = true;
    },
    [getActivities.rejected]: (state, action) => {
      state.error = action.error.message;
    },
  },
});

export default activitySlice.reducer;