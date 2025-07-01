import { useState, useEffect } from "react";

import { fetchReviews } from "../services/Review";
import { POSTER_PATH } from "../globals";

const MyReviews = (user) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const handleRev = async () => {
      const data = await fetchReviews();
      setReviews(data);
    };
    handleRev();
  }, []);

  return (
    <div className="reviewsContainer">
      {user ? (
        reviews.map((review) => (
          <div key={review._id} className="reviewItem">
            <div className="reviewDetails">
              <h3>{review.movieTitle}</h3>
              <p>{review.comment}</p>
              <p className="rating">⭐ {review.rating} / 5</p>
              <p className="meta">
                {review.like
                  ? "👍 Liked"
                  : review.dislike
                  ? "👎 Disliked"
                  : "No reaction"}
                · {review.helpfulVotes} Helpful
              </p>
            </div>
          </div>
        ))
      ) : (
        <div className="protected">
          <h3>You must be signed in to do that!</h3>
          <button onClick={() => navigate("/signin")}>Sign In</button>
        </div>
      )}
    </div>
  );
};

export default MyReviews;
