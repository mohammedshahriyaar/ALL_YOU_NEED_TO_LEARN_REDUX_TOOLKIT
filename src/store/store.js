import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "../slices/cartSlice";
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key:"root",
    version:1,
    storage
};


const persistedReducer = persistReducer(persistConfig,cartReducer);

// export const store = configureStore({
//     reducer:cartReducer
// })

export const store = configureStore({
    reducer:persistedReducer
})