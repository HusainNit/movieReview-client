import Client from "./api";

export const Review = async (obj) => {
  try {
    const res = await Client.put(`/movies/${obj.movieId}/Review`, obj);
    if (res?.data?.success) {
      alert(" Review submitted successfully!");
    } else {
      alert("Something went wrong while submitting your review.");
    }
  } catch (error) {
    console.error("Error in GetMovies:", error);
    throw error;
  }
};
