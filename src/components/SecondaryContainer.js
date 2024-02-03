import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const SecondaryContainer = () => {

    const movies = useSelector(store => store.movies);
    console.log("Movies in Secondary container ", movies);
    console.log("NowPlaying Movies in Secondary container ", movies.nowPlayingMovies);
    console.log("Popular Movies in Secondary container ", movies.popularMovies);
    console.log("TopRated Movies in Secondary container ", movies.topRatedMovies);
    console.log("Upcoming Movies in Secondary container ", movies.upcomingMovies);
    return (
    movies && (<div className=" bg-black">
        <div className="-mt-80 relative z-20 pl-12">
            <MoviesList title="Now Playing" movies={movies.nowPlayingMovies} />
            <MoviesList title="Popular" movies={movies.popularMovies} />
            <MoviesList title="TopRated" movies={movies.topRatedMovies} />
            <MoviesList title="Upcoming" movies={movies.upcomingMovies} />
        </div>
    </div>)
    )
}

export default SecondaryContainer;