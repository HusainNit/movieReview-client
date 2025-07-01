import { useEffect, useState } from "react";
import { fevData } from "../services/favoriteApi";
import { POSTER_PATH } from "../globals";
import { removeFavorite } from "../services/favoriteApi";

const MyFavorites = ({ user }) => {
  const [favs, setFavs] = useState([]);

  const fetchFavorites = async () => {
    const data = await fevData();
    setFavs(data);
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  const handleDelete = async (id) => {
    try {
      await removeFavorite(id);
      await fetchFavorites();
    } catch (err) {
      console.error("Failed to delete favorite:", err);
    }
  };

  return (
    <div className="favoritesContainer">
      {user ? (
        favs.map((movie) => (
          <div key={movie.id} className="favoriteItem">
            <div className="posterPreview">
              <img
                src={`${POSTER_PATH}${movie.backdrop_path}`}
                alt="poster"
                className="posterImg"
              />
            </div>
            <div className="movieDetails">
              <h3>{movie.title}</h3>
              <p>{movie.overview?.slice(0, 100)}...</p>
              <button
                onClick={() => handleDelete(movie.id)}
                className="deleteButton"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="protected">
          <h3>You must be signed in to do that!</h3>
          <button onClick={() => navigate("/signin")}>Sign In</button>
        </div>
      )}
    </div>
  );
};
export default MyFavorites;
