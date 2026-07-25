import { createSlice } from '@reduxjs/toolkit';
 const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{},
}); 