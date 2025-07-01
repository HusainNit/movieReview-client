import Client from "./api";

export const Review = async (obj) => {
  try {
    const res = await Client.put(`/movies/${obj.movieId}/Review`, obj);
    return res;
  } catch (error) {
    console.error("Error in Review submit:", error);
    throw error;
  }
};
