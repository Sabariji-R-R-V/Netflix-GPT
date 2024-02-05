import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/langConstants";
import { useRef, useState } from "react";
import runChat from "../openAI/geminiAi";
import { options } from "../utils/apiOptions"
import { addGptSuggestedMoviesList, emptySuggestedMoviesList } from "../store/gptSearchSlice";

const GptSearchBar = () => {

    const [errorMessage, SetErrorMessage] = useState(null);
    const langSelected = useSelector(store => store.lang.selectedLang)
    const gptSearchText = useRef(null);
    const dispatch = useDispatch();


    const handleGptSearch = async () => {

        console.log(gptSearchText.current.value);
        if ( gptSearchText.current.value === "") {
            SetErrorMessage("Enter_something_to_search");
            dispatch(emptySuggestedMoviesList({names: null, movies: null}));
            return
        }
        else {
            SetErrorMessage("");
        }

        const query = "Act as a movie recommendation system and suggest some movies names only for the query : " + gptSearchText.current.value +
        "only give me names of 5 movies, comma seperated without mentioning year and list them number";
        let geminiResult = await runChat(query);
        console.log("Gemini Results ", geminiResult);

        // Use regular expression to match movie names
        const movieRegex = /\d+\.\s(.+)$/gm;
        const matches = geminiResult.matchAll(movieRegex);

        // Extract movie names from matches
        const movieArray = [...matches].map(match => match[1]);
        console.log("Gemini Results Array ", movieArray);

        const promiseArray = movieArray.map(movie => searchMoviesInTMDB(movie));
        console.log("promise Array ",promiseArray);

        const result_of_searchMovies = await Promise.all(promiseArray);
        console.log("Result of Search Movies ", result_of_searchMovies)
        dispatch(addGptSuggestedMoviesList({names: movieArray, movies: result_of_searchMovies}));

    }

    const searchMoviesInTMDB = async (movie) => {
        const url = "https://api.themoviedb.org/3/search/movie?query=" +encodeURI(movie)+ "&include_adult=false&&page=1";
        const data = await fetch(url, options);
        const json = await data.json();
        return json.results;
    }

    return (
        <div className="md:pt-[10%] flex justify-center rounded-xl">
            <form onSubmit={(e) => e.preventDefault()} className="md:w-1/2 md:text-lg text-sm bg-black grid grid-cols-12 p-5 bg-opacity-40">
                <input ref={gptSearchText} className="rounded-lg border border-solid border-black w-auto p-5 mx-5 col-span-9" 
                    placeholder={lang[langSelected].placeholder}/>
                <button className="bg-red-500 text-white font-bold p-3 mx-3 rounded-lg col-span-3"
                onClick={handleGptSearch}> {lang[langSelected].search} </button>
                <p className="text-red-500 font-bold text-lg mx-5 my-2"> { errorMessage }</p>
                
            </form>
        </div>
    )
}

export default GptSearchBar;