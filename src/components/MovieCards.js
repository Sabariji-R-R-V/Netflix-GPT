import { MoviePoster } from "../utils/ImageUrls"

const MoviesList = ({posterPath}) => {
    if(!posterPath) return null;
    return <div className="md:w-52 md:pr-4 w-32 pr-2 overflow-y-auto">
       <img className="border border-white border-solid border-r-2 rounded-lg" alt="Movies Poster" src={MoviePoster+posterPath} />
    </div>
}
export default MoviesList