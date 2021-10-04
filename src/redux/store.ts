import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import DogsReducer from './dogsReducer';

export const store = configureStore({
  reducer: { dogs: DogsReducer},
  middleware: [thunk, logger]
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;