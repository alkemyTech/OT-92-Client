import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import membersSlice from './members/membersSlice';
export default configureStore({
  reducer: {
    counter: counterReducer,
    members: membersSlice
  },
});
