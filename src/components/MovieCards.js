import { MoviePoster } from "../utils/ImageUrls"

const MoviesList = ({posterPath}) => {
    return <div className="w-52 pr-4">
       <img className="border border-white border-solid border-r-2 rounded-lg" alt="Movies Poster" src={MoviePoster+posterPath} />
    </div>
}
export default MoviesList