import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";
import lang from "../utils/langConstants";

const SecondaryContainer = () => {

    const movies = useSelector(store => store.movies);
    const langSelected = useSelector(store => store.lang.selectedLang)
    
    return (
    movies && (<div className=" bg-black">
        <div className="md:-mt-80 relative z-20 md:pl-12">
            <MoviesList title={lang[langSelected].nowPlaying} movies={movies.nowPlayingMovies} />
            <MoviesList title={lang[langSelected].popular} movies={movies.popularMovies} />
            <MoviesList title={lang[langSelected].topRated} movies={movies.topRatedMovies} />
            <MoviesList title={lang[langSelected].upComing} movies={movies.upcomingMovies} />
        </div>
    </div>)
    )
}

export default SecondaryContainer;