// productsSlice2.js
import { createSlice } from '@reduxjs/toolkit';

const productsSlice2 = createSlice({
  name: 'products2',
  initialState: { items: [] },
  reducers: {
    setProducts2: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setProducts2} = productsSlice2.actions;
export default productsSlice2.reducer;