import Client from "./api";

export const SearchMovie = async ({searchTerm}) => {
  try {
    console.log("SearchMovie called with:", searchTerm);
    const res = await Client.get(`/movies/search?q=${searchTerm}`);
    console.log("SearchMovie response:", res.data); // <-- log res.data
    return res.data; // <-- return the array directly
  } catch (error) {
    console.error("Error in SearchMovie:", error);
    throw error;
  }
};
