import MovieCards from "../components/MovieCards"

const MoviesList = ({title, movies}) => {
    return (
    <div className="px-6 py-3 text-white">
        <h1 className="font-bold text-3xl py-4"> { title } </h1>
        <div className="flex overflow-x-auto" style={{ scrollbarWidth: 'none', 'MsOverFlowStyle': 'none' }}>
            <div className="flex">
                {movies?.map((movie) => <MovieCards key={movie.id} posterPath={movie.poster_path} />)}
            </div>
            
        </div>
    </div>
    )
}
export default MoviesList
