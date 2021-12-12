import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Components/CounterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});