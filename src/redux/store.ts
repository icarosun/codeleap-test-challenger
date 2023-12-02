import { configureStore, PreloadedState } from "@reduxjs/toolkit";
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

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: persistedReducer,
    preloadedState,
  });
}
/*
export const store = configureStore({
  reducer: persistedReducer,
  PreloadedState
})*/

export type RootState = ReturnType<typeof persistedReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
export const persistor = () => persistStore(setupStore());
