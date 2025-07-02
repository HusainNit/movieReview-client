import { useParams } from "react-router-dom";
import { getReviewsForMovie } from "../services/Review";
import { useEffect, useState } from "react";

const MovieReviews = ({ user }) => {
  const { id } = useParams(); // this grabs the ID from the URL
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getReviewsForMovie(id);
                    {console.log(data)}

        setReviews(data);
      } catch (err) {
        console.error("Failed to load reviews:", err);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="reviewsContainer">
      <h2>Reviews for Movie #{id}</h2>
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        reviews.map((review) => (
          <div key={review._id} className="reviewItem">
            {console.log(review)}
            <p>
              <strong>User:</strong> {review.userId?.email || "Anonymous"}
            </p>
            <p>
              <strong>Rating:</strong> ⭐ {review.rating}
            </p>
            <p>{review.comment}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default MovieReviews;
