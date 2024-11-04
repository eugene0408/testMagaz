import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGoods = createAsyncThunk(
    'goods/fetchGoods',
    async function(_, {rejectWithValue}){
        try{
            const response = await fetch(`data/goods.json`); 
        
            if(!response.ok){
                throw new Error(`Помилка завантаження списку товарів`)
            }
            const data = await response.json();
            return data;

        } catch (error) {
            return rejectWithValue(error.messege);
        } 
    }
)


const goodsSlice = createSlice({
    name: 'goods',
    initialState: {
        goods: [],
        status: null,
        error: null
    },
    extraReducers: {
        [fetchGoods.pending]: (state) => {
            state.status = 'loading'
            state.error = null
        },

        [fetchGoods.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.goods = action.payload
        },

        [fetchGoods.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },
        
    }
});

export default goodsSlice.reducer;