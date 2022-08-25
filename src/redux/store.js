import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { itemsReducer, filterReducer } from './contacts/contacts-reducer';

const rootPersistConfig = {
  key: 'root',
  storage,
  blacklist: ['filter'],
};

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

const persistedReducer = persistReducer(rootPersistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // devTools: process.env.NODE_ENV !== 'production',
});
export const persistor = persistStore(store);
