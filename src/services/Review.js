import CustemPopUp from "../components/CustemPopUp";
import Client from "./api";

export const Review = async (obj) => {
  try {
    const res = await Client.put(`/movies/${obj.movieId}/Review`, obj);
    if (res?.data?.success) {
      <CustemPopUp text={"Review submitted successfully"} route={"ok"} />;
    } else {
      <CustemPopUp
        text={"Something went wrong while submitting your review."}
        route={"ok"}
      />;
    }
  } catch (error) {
    console.error("Error in Review submit:", error);
    throw error;
  }
};
