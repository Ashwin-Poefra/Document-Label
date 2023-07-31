import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas';
import { Slices, Actions } from './slices';

const sagaMiddleware = createSagaMiddleware();

// create store
export const store = configureStore({
  reducer: Slices,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false, thunk: false }).concat(
      sagaMiddleware
    ),
});

sagaMiddleware.run(rootSaga);

// root state
export type RootState = ReturnType<typeof store.getState>;

// export app dispatch
export type AppDispatch = typeof store.dispatch;

// export app actions
export const AppActions = Actions;
