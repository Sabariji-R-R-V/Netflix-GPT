import { useDispatch } from "react-redux";
import { addTopRatedVideo } from "../store/movieSlice";
import { useEffect } from "react";
import { options } from "../utils/apiOptions"

const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    const getUseTopRatedMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?&page=1', options);
        const json = await data.json()
        dispatch(addTopRatedVideo(json.results));
    }

    useEffect( () => {
        getUseTopRatedMovies()
    }, [])
}

export default useTopRatedMovies;