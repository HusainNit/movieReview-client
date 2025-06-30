import Client from './api'; // this is your custom Axios instance

// Get a list of the user's favorite movies.
export const getFavorites = async (userId) => {
  const res = await Client.get(`/profile/${userId}/favorite`);
  return res.data;
}

// Add a new movie to the user's favorites list.
export const addFavorite = async (userId, favoriteData) => {
  const res = await Client.post(`/profile/${userId}/favorite`, favoriteData);
  return res.data;
}

// Remove a specific movie from the user's favorites.
export const removeFavorite = async (userId, favoriteId) => {
  const res = await Client.delete(`/profile/${userId}/favorite/${favoriteId}`);
  return res.data;
}
