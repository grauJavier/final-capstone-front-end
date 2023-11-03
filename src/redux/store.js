import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { createTransform } from 'redux-persist';

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
  storage,
  whitelist: ['user'],
  transforms: [userTransform]
};

const reducer = combineReducers({
  user: userReducer
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
