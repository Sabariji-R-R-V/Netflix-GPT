import movieSlice from "./movieSlice";
import userSlice from "./userSlice";
import gptSlice from "./gptSearchSlice"
import languageSlice from "./languageSlice";
import { configureStore } from "@reduxjs/toolkit";

const appStore = configureStore({
    reducer: {
        user: userSlice,
        movies: movieSlice,
        gpt: gptSlice,
        lang: languageSlice,
    }
})

export default appStore