import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './category/categorySlice'
import counterReducer from '../features/counter/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    categories: categoriesReducer
  },
});
