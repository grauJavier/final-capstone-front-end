import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import cityReducer from './city/citySlice';
import { persistStore, persistReducer } from 'redux-persist';
import sessionStorage from 'redux-persist/lib/storage/session'; // defaults to localStorage for web
import { createTransform } from 'redux-persist';
import placesSlice from "./places/placesSlice";

// Create a personalized transform.
const userTransform = createTransform(
  (inboundState) => {
    return {
      currentUser: inboundState.currentUser,
      token: inboundState.token
    };
  },

  (outboundState) => {
    return {
      ...outboundState
    };
  },
  // Apply this transform only to the user state.
  { whitelist: ['user'] }
);

const persistConfig = {
  key: 'root',
  storage: sessionStorage,
  whitelist: ['user'],
  transforms: [userTransform]
};

const reducer = combineReducers({
  user: userReducer,
  placesSlice,
  city: cityReducer
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
