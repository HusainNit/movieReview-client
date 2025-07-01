import { useState } from "react";
import { SearchMovie } from "../services/searchMovie";
import { useNavigate } from "react-router-dom";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w200";

const Search = ({ user }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    const data = await SearchMovie({ searchTerm });
    setResults(data || []);
  };

  return (
    <div className="search-container">
      {user ? (
        <>
          <form className="search-form" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search for a movie..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search for a movie"
            />
            <button type="submit">Search</button>
          </form>

          {results.length > 0 ? (
            <div className="search-grid">
              {results.map((movie) => (
                <div
                  key={movie.id}
                  className="search-card"
                  onClick={() =>
                    navigate(`/movies/${movie.id}`, { state: { movie } })
                  }
                >
                  {movie.poster_path ? (
                    <img
                      src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                      alt={movie.title}
                      className="search-poster"
                    />
                  ) : (
                    <div className="no-image">No Image Available</div>
                  )}
                  <div className="movie-info">
                    <h3 className="movie-title">{movie.title}</h3>
                    <p className="movie-date">{movie.release_date}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results">No results found.</div>
          )}
        </>
      ) : (
        <div className="protected">
          <h3>You must be signed in to search for movies</h3>
          <button onClick={() => navigate("/signin")}>Sign In</button>
        </div>
      )}
    </div>
  );
};

export default Search;
