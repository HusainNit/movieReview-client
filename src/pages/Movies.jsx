import { POSTER_PATH } from "../globals";
import { useState, useEffect } from "react";
import { GetMovies } from "../services/MoviesGetter";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const moreData = (movie) => {
    setSelectedMovie(movie);
     console.log(movie);
  };

  const unSelect = () => {
    setSelectedMovie(null);
  };

  useEffect(() => {
    const handleMovies = async () => {
      const data = await GetMovies();
      console.log(data);
      setMovies(Array.isArray(data.allMovies) ? data.allMovies : []);
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
