import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import membersSlice from './members/membersSlice';
import newsSlice from './news/newsSlice';
export default configureStore({
  reducer: {
    counter: counterReducer,
    members: membersSlice,
    news: newsSlice
  },
});
