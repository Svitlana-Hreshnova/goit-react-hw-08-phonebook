import { configureStore} from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage' 
import { authReducer } from './user/usersSlice';
import { contactsSlice } from "./contacts/contactsSlice";
import { filterSlice } from "./contacts/filterSlice";


const persistConfig = {
  key: "contacts",
  storage,
  whitelist: ['token'],
}

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
    reducer: {
        user: persistedReducer,
        contacts: contactsSlice.reducer,
        filter: filterSlice.reducer,
    },
     middleware: (getDefaultMiddleware) =>
     getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

})

export const persistor = persistStore(store);






