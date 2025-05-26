import "../CSS/MovieCard.css"

function MovieCard({ movie }) {

    function onFavourtieClick() {
        alert("clicked")
    }

    return <div className="movie-card">
        <div className="movie-poster">
            <img src={movie.url} alt={movie.title}></img>
            <div className="movie-overlay">
                <button className="favourite-btn" onClick={onFavourtieClick}>❤️</button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
        </div>
    </div>
}

export default MovieCard