import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const GptMovieSuggestions = () => {

    const { gptSuggestedMoviesName, gptSuggestedMoviesList } = useSelector(store => store.gpt);
    console.log("Movie Names ", gptSuggestedMoviesName);
    console.log("Movie List ", gptSuggestedMoviesList);
    return (
        <div className="bg-black p-5 m-5 text-white bg-opacity-70 rounded-3xl fixed md:w-[98%] w-[90%] h-[60%]">
            <div className="overflow-auto max-h-[100%]">
            { gptSuggestedMoviesName?.map((movieName, index) => <MoviesList key={movieName} title = {movieName} movies = {gptSuggestedMoviesList[index]}/> ) }
            </div>
        </div>
    )
}

export default GptMovieSuggestions;