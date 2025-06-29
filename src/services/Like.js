import Client from "./api";

export const Like = async (id) => {
  try {
    const res = await Client.put(`/movies/${id}/like`);
    console.log(res);
    return res.data;
  } catch (error) {
    console.error("Error in GetMovies:", error);
    throw error;
  }
};
