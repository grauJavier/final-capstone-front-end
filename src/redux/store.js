import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import reservationReducer from './reservation_form/reservationSlice.js';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
};

const reducer = combineReducers({
  user: userReducer,
  reservation: reservationReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }),
});

const persistor = persistStore(store);

export { store, persistor };
