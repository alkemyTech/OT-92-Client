import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './category/categorySlice'
import counterReducer from '../features/counter/counterSlice';
import sliceBackOffice from './Slices/SlicesBackOffice';
import activitiesReducer from '../../src/store/activity/activitySlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    categories: categoriesReducer,
    listSlice: sliceBackOffice,
    activities: activitiesReducer,
  },
});
