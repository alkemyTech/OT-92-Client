import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import activitiesReducer from '../../src/store/activity/activitySlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    activities: activitiesReducer,
  },
});
