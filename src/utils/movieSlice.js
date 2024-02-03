import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload
        },
        addPopularVideo: (state, action) => {
            state.popularMovies = action.payload
        },
        addTopRatedVideo: (state, action) => {
            state.topRatedMovies = action.payload
        },
        addUpcomingVideo: (state, action) => {
            state.upcomingMovies = action.payload
        }
    }
})

export default movieSlice.reducer;
export const { addNowPlayingMovies, addTrailerVideo, addPopularVideo, addTopRatedVideo, addUpcomingVideo } = movieSlice.actions;