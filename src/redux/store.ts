import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import LocalStorage from "redux-persist/lib/storage";
import { POSTS_LOCALSTORAGE_KEY } from "../constants";
import { rootReducer } from "./slices/";

const persistConfig = {
  key: POSTS_LOCALSTORAGE_KEY,
  storage: LocalStorage,
  blacklist: ['username']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
