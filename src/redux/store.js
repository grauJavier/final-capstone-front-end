import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import reservationReducer from './reservationForm/reservationSlice.js';
import myReservationsReducer from './myReservations/myReservationsSlice.js';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
};

const reducer = combineReducers({
  user: userReducer,
  reservation: reservationReducer,
  myReservations: myReservationsReducer,
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
