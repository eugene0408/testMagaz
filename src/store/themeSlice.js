import {createSlice} from "@reduxjs/toolkit";

const initialState = 'default';

const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		setTheme: (state, action) => state = action.payload	
	}

})


export const {setTheme} = themeSlice.actions;
export default themeSlice.reducer;