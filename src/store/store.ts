import { configureStore } from '@reduxjs/toolkit';
import { messageApi, userApi } from 'api';

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [messageApi.reducerPath]: messageApi.reducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([userApi.middleware, messageApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
