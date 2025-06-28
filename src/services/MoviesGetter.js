import Client from "./api";

export const GetMovies = async (page = 1) => {
  try {
    const res = await Client.get(`/movies?page=${page}`);
    console.log(res);
    return res.data.allMovies;
  } catch (error) {
    console.error("Error in GetMovies:", error);
    throw error;
  }
};
