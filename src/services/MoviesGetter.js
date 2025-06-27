import Client from "./api";

export const GetMovies = async () => {
  try {
    const res = await Client.get("/movies");

    return res.data;
  } catch (error) {
    console.error("Error in GetMovies:", error);
    throw error;
  }
};
