import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCategories = createAsyncThunk(
    'categories/fetcCategories',
    async function(_, {rejectWithValue}){
        try{
            const response = await fetch(`data/categories.json`); 
        
            if(!response.ok){
                throw new Error('Помилка завантаження списку категорій')
            }
            const data = await response.json();
            return data;

        } catch (error) {
            return rejectWithValue(error.messege);
        } 
    }
)

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        list: [],
        current: 'none',
        status: null,
        error: null
    },
    reducers: {
        changeCategory: (state, action) => {
            state.current = action.payload.category;
        },
    },
    extraReducers: {
        [fetchCategories.pending]: (state) => {
            state.status = 'loading'
            state.error = null
        },


        [fetchCategories.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.list = action.payload
        },

        [fetchCategories.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },
        
    }
})

export const {changeCategory} = categoriesSlice.actions;
export default categoriesSlice.reducer;