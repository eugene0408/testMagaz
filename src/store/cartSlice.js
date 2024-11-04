import { createSlice } from "@reduxjs/toolkit";


const initialState = {}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            if(state[action.payload.id] === undefined){
                state[action.payload.id] = 1
            }else{
                state[action.payload.id]++
            }
        },
        addAmount: (state, action) => {
            state[action.payload.id]++
        },
        reduceAmount: (state, action) => {
            if(state[action.payload.id] <= 1){
                state[action.payload.id] = 1
            }else{
                state[action.payload.id]--
            }
        },
        removeItem: (state, action) => {
          delete state[action.payload.id]
        }
    }
});

export const {
    addToCart,
    addAmount,
    reduceAmount,
    removeItem
} = cartSlice.actions;
export default cartSlice.reducer;