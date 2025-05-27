import "../CSS/Favourites.css";
import MovieCard from "../Components/MovieCard";
import { useMovieContext } from "../Context/MovieContext";
// import MovieCard from "../Components/MovieCard";

function Favourite() {
    const { favourites } = useMovieContext();

    if (favourites) {
        return (
            <div className="favourites">
                <h2>Your Favourites Movies</h2>
                <div className="movies-grid">
                    {favourites.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            </div>
        );
    }
    return (
        <div className="favourites-empty">
            <h2>NO Favourite Movies Yet</h2>
            <p>Start adding movies to your favourites and they will appear hear</p>
        </div>
    );
}

export default Favourite;
