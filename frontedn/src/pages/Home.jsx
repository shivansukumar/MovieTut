import MovieCard from "../Components/MovieCard";
import { useState } from "react";
import "../CSS/Home.css"

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        { id: 1, title: "John Wick", release_date: 2020 },
        { id: 2, title: "Run", release_date: 2020 },
        { id: 3, title: "Saga", release_date: 2020 },
        { id: 4, title: "Gun", release_date: 2020 },
        { id: 5, title: "Cinema", release_date: 2020 },
        { id: 6, title: "Fun", release_date: 2020 },
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        alert(searchQuery);
        setSearchQuery("------");
    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search for movies..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                ></input>
                <button type="submit" className="search-button">
                    Search
                </button>
            </form>
            <div className="movies-grid">
                {movies.map(
                    (movie) =>
                        movie.title.toLowerCase().startsWith(searchQuery) && (
                            <MovieCard movie={movie} key={movie.id} />
                        )
                )}
            </div>
        </div>
    );
}

export default Home;
