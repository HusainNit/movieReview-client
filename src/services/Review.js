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

export const fetchReviews = async () => {
  try {
    const res = await Client.get("/review/my-reviews");

    return res.data;
  } catch (error) {
    console.error("Error in Review fetch:", error);
  }
};

export const getReviewsForMovie = async (id) => {
  try {
    const response = await Client.get(`/review/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error in Review fetch:", error);
  }
};
