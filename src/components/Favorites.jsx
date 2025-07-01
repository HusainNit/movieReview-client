import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getFavorites, removeFavorite } from "../services/favoriteApi";

const Favorites = ({ userId }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const data = await getFavorites(userId);
      setFavorites(data);
    };
    fetchFavorites();
  }, [userId]);

  const handleRemove = async (favoriteId) => {
    await removeFavorite(userId, favoriteId);
    setFavorites(favorites.filter((fav) => fav._id !== favoriteId));
  };

  return (
    <div>
      <h2>My Favorite Movies</h2>
      <ul>
        {favorites.map((fav) => (
          <li key={fav._id}>
            {fav.movieId.title}
            <button onClick={() => handleRemove(fav._id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
