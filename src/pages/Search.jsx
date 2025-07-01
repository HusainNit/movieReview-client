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
    const data = await SearchMovie({ searchTerm });
    setResults(data);
  };

  return (
    <div>
      {user ? (
        <>
          <form className="search-form">
            <input
              type="text"
              placeholder="Search for a movie..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" onClick={handleSearch}>
              Search
            </button>
          </form>
          <div>
            <h2>Search Results:</h2>
            <div className="search-grid">
              {Array.isArray(results) && results.length > 0 ? (
                results.map((movie) => (
                  <div
                    key={movie.id}
                    className="search-card"
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      navigate(`/movies/${movie.id}`, { state: { movie } })
                    }
                  >
                    {movie.poster_path ? (
                      <img
                        src={IMAGE_BASE_URL + movie.poster_path}
                        alt={movie.title}
                        className="search-poster"
                      />
                    ) : (
                      <div className="no-image">No Image</div>
                    )}
                    <div className="movie-title">{movie.title}</div>
                    <div className="movie-date">{movie.release_date}</div>
                  </div>
                ))
              ) : (
                <div className="no-results">No results found.</div>
              )}
            </div>
          </div>
        </>
      ) : (
        <div className="protected">
          <h3>You must be signed in to do that!</h3>
          <button onClick={() => navigate("/signin")}>Sign In</button>
        </div>
      )}
    </div>
  );
};

export default Search;
