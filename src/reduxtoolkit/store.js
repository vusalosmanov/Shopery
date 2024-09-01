// store.js
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productSlice';
import productsReducer2 from './productSlice2';

const store = configureStore({
    reducer: {
      products: productsReducer,
      products2: productsReducer2,
    },
  });

export default store;