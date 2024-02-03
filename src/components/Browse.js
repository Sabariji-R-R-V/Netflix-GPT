import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import GptPage from "./GptPage";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";

const Browse = () => {

    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    const isGpt = useSelector(store => store.gpt.showGPTSearch)

    return (
        <div>
            <Header />
            {isGpt ? <GptPage /> : (
                <>
                 <MainContainer />
                 <SecondaryContainer />
                </>
            )}
        </div>
    )
}

export default Browse;