import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import sliceBackOffice from './Slices/SlicesBackOffice'
import activitiesReducer from '../../src/store/activity/activitySlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    listSlice: sliceBackOffice,
    activities: activitiesReducer,
  },
});
