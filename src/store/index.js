import { configureStore, combineReducers } from "@reduxjs/toolkit";
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

import goodsReducer from './goodsSlice';
import categoriesReducer from './categoriesSlice';
import cartReducer from './cartSlice';
import themeReducer from './themeSlice';

const rootReducer = combineReducers({
    goods: goodsReducer,
    categories: categoriesReducer,
    cart: cartReducer,
    theme: themeReducer
  })

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });

export const persistor = persistStore(store);

export default store;