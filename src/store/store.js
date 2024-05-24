import { combineReducers } from "redux";
import loginSlice from "./slices/loginSlice";
import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from "redux-persist";

const rootReducer = combineReducers({
  loginSlice,
});

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["loginSlice",],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
});

export const persistor = persistStore(store);

export default store;