import { useDispatch } from "react-redux";
import { addPopularVideo } from "../utils/movieSlice";
import { useEffect } from "react";
import { options } from "../utils/apiOptions"

const usePopularMovies = () => {
    const dispatch = useDispatch();

    const getUsePopularMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?&page=1', options);
        const json = await data.json()
        console.log("Result ", json.results)
        dispatch(addPopularVideo(json.results));
    }

    useEffect( () => {
        getUsePopularMovies()
    }, [])
}

export default usePopularMovies;