import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import DogsReducer from './dogsReducer';

export const store = configureStore({
  reducer: { dogs: DogsReducer},
  middleware: [thunk]
});

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;