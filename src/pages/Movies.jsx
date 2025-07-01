import { useState, useEffect } from "react";
import { GetMovies } from "../services/MoviesGetter";

// import { addFavorite } from '../services/favoriteApi';

import { Route, Routes, useNavigate } from "react-router-dom";
import AllMovies from "../components/AllMovies";
import GetMovie from "../components/GetMovie";

const Movies = ({ user }) => {
  let navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const moreData = (id) => {
    navigate(`/movies/${id}`);
  };

  // const handleAddToFavorites = async (movie) => {
  //   const userId = localStorage.getItem('userId')
  //   if (!userId) {
  //     alert("Please sign in first to add favorites")
  //     return;
  //   }

  //   try {
  //     await addFavorite(userId, {
  //     movieId: movie.id,
  //     movieTitle: movie.title,
  //     movieType: movie.genre_ids?.[0] || "Unknown",
  //     moviePoster: `${POSTER_PATH}${movie.backdrop_path}`
  //   });
  //   alert("Movie added to favorites!");
  //   } catch (error) {
  //     console.error("Error adding to favorites:", error.message);
  //     alert("Failed to add favorite. Maybe it's already added.");
  //   }

  // }

  useEffect(() => {
    const handleMovies = async () => {
      const data = await GetMovies(page);
      setMovies(data);
    };
    handleMovies();
  }, [page]);

  return (
    <>
      <div className="grid">
        {movies.length > 18 ? (
          <Routes>
            <Route
              path="/"
              element={<AllMovies movies={movies} moreData={moreData} />}
            />
            <Route
              path="/:id"
              element={<GetMovie movies={movies} user={user} />}
            />
          </Routes>
        ) : (
          <p className="loadingMV">Loading movies...</p>
        )}
      </div>
      {window.location.pathname === "/movies" && (
        <div className="pagination">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
          >
            ◀
          </button>
          <span className="counter">Page {page}</span>
          <button onClick={() => setPage((p) => p + 1)}>▶</button>
        </div>
      )}
    </>
  );
};

export default Movies;
