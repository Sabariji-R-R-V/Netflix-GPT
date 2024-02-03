import { createSlice } from "@reduxjs/toolkit";

const GptSearchSlice = createSlice({
    name: "gpt",
    initialState: {
        showGPTSearch: false
    },
    reducers: {
        toggleGptSearch: (state) => {
            state.showGPTSearch = !state.showGPTSearch
        } 
    }

})

export default GptSearchSlice.reducer;
export const { toggleGptSearch } = GptSearchSlice.actions;