import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import historyReducer from '../redux/reducers/historySlice';
import authReducer from  '../features/auth/authSlice';

export const store = configureStore({
  reducer: {
    history:historyReducer,
    auth:authReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
