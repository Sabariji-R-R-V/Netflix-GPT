import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {

    const movies = useSelector(store => store?.movies.nowPlayingMovies)
    console.log("Movies from store = ", movies);

    if(!movies) return
    
    const mainMovie = movies[0]
    console.log("Main movie ", mainMovie);

    const { title, overview, id } = mainMovie;

    return <div>
        <VideoTitle title={title} overview={overview} />
        <VideoBackground movieId={id} />
    </div>
}

export default MainContainer;