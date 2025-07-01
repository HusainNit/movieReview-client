import Client from "./api";

export const removeFavorite = async (id) => {
  const res = await Client.delete(`/favorite/delete/${id}`);
};

export const fevData = async () => {
  try {
    const res = await Client.get(`/favorite/myFavorite`);
    return res.data.favorites;
  } catch (error) {
    console.error("Error in fav:", error);
    throw error;
  }
};
