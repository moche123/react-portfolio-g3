import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import votationReducer from '../features/portfolio/votationSlice'


export const store = configureStore({
  reducer: {
    votation: votationReducer
    //counter: counterReducer,
  },
});
