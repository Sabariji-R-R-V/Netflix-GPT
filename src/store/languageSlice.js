import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
    name: "lang",
    initialState: {
        selectedLang: "en"
    },
    reducers: {
        selectLanguage: (state, action) => {
            state.selectedLang = action.payload
        },
    }
})

export default languageSlice.reducer;
export const { selectLanguage } = languageSlice.actions; 