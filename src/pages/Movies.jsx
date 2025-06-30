import { POSTER_PATH } from "../globals";
import { useState, useEffect } from "react";
import { GetMovies } from "../services/MoviesGetter";
import { addFavorite } from '../services/favoriteApi';


const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const moreData = (movie) => {
    setSelectedMovie(movie);
    // console.log(movie);
  };

  const unSelect = () => {
    setSelectedMovie(null);
  };

  const handleAddToFavorites = async (movie) => {
    const userId = localStorage.getItem('userId')
    if (!userId) {
      alert("Please sign in first to add favorites")
      return;
    }

    try {
      await addFavorite(userId, {
      movieId: movie.id,
      movieTitle: movie.title,
      movieType: movie.genre_ids?.[0] || "Unknown",
      moviePoster: `${POSTER_PATH}${movie.backdrop_path}` 
    });
    alert("Movie added to favorites!");
    } catch (error) {
      console.error("Error adding to favorites:", error.message);
      alert("Failed to add favorite. Maybe it's already added.");
    }

  }

  useEffect(() => {
    const handleMovies = async () => {
      const data = await GetMovies();
      setMovies(data);
    };
    handleMovies();
  }, []);

  return (
    <div className="grid">
      {selectedMovie ? (
        <div className="card alone">
          <img
            src={`${POSTER_PATH}${selectedMovie.backdrop_path}`}
            alt="poster"
          />
          <h3>{selectedMovie.title}</h3>
          <button onClick={() => unSelect()}>unSelect</button>
          <p>
            adult:
            {selectedMovie.adult ? <small>true</small> : <small>false</small>}
            <br />
            popularity: {selectedMovie.popularity}
            <br />
            release_date: {selectedMovie.release_date}
            <br />
            vote_average: {selectedMovie.vote_average}
            <br />
            vote_count: {selectedMovie.vote_count}
          </p>
        </div>
      ) : (
        movies.map((movie) => (
          <div key={movie.id} className="card">
            <img src={`${POSTER_PATH}${movie.backdrop_path}`} alt="poster" />
            <h3>{movie.title}</h3>
            <button onClick={() => moreData(movie)}>View Movie</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Movies;
