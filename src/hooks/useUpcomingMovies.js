import { useDispatch } from "react-redux";
import { addUpcomingVideo } from "../utils/movieSlice";
import { useEffect } from "react";
import { options } from "../utils/apiOptions"

const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    const getUseUpcomingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?&page=1', options);
        const json = await data.json()
        console.log("Result ", json.results)
        dispatch(addUpcomingVideo(json.results));
    }

    useEffect( () => {
        getUseUpcomingMovies()
    }, [])
}

export default useUpcomingMovies;