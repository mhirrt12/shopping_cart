import { createSlice } from '@reduxjs/toolkit';
 const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
   addItem(state,action){
      const existingItem = state.cartItems.find((item)=> item.id === action.payload.id);
      if(existingItem){
         existingItem.quantity +=1;
      } else {
         state.cartItems.push({
         ...action.payload,
         quantity: 1
         });;
      }
            state.totalQuantity += 1;
            state.totalAmount += action.payload.price;
            
   }
}},
); 