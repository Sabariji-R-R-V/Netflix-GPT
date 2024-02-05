import { createSlice } from "@reduxjs/toolkit";

const GptSearchSlice = createSlice({
    name: "gpt",
    initialState: {
        showGPTSearch: false,
        gptSuggestedMoviesName: null,
        gptSuggestedMoviesList: null,
    },
    reducers: {
        toggleGptSearch: (state) => {
            state.showGPTSearch = !state.showGPTSearch
        },
        addGptSuggestedMoviesList: (state, action) => {
            state.gptSuggestedMoviesName = action.payload.names
            state.gptSuggestedMoviesList = action.payload.movies
        },
        emptySuggestedMoviesList: (state, action) => {
            state.gptSuggestedMoviesName = action.payload.names
            state.gptSuggestedMoviesList = action.payload.movies
        }
    }

})

export default GptSearchSlice.reducer;
export const { toggleGptSearch, addGptSuggestedMoviesList, emptySuggestedMoviesList } = GptSearchSlice.actions;