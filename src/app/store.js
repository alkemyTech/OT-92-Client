import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import sliceBackOffice from './Slices/SlicesBackOffice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    listSlice: sliceBackOffice
  },
});
