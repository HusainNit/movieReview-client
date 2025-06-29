import { POSTER_PATH } from "../globals";
import { useNavigate, useParams } from "react-router-dom";
import { Review } from "../services/Review";
import { useState } from "react";

const GetMovie = ({ movies, unSelect }) => {
  let navigate = useNavigate();
  const { id } = useParams();
  const movie = movies.find((m) => m.id === Number(id));

  const [rev, setRev] = useState(false);
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [rating, setRating] = useState(null);
  const [comment, setComment] = useState("");

  const toggleLike = () => {
    setLike(!like);
    if (!like && dislike) setDislike(false);
  };

  const toggleDislike = () => {
    setDislike(!dislike);
    if (!dislike && like) setLike(false);
  };

  return (
    <>
      {movie && (
        <div className="card alone">
          <div className="up">
            <div className="imgContainer">
              <img
                src={`${POSTER_PATH}${movie.backdrop_path}`}
                alt="poster"
                className="oneImg"
              />
            </div>
            <div className="info">
              <h1>{movie.title}</h1>
              <hr />
              <div className="subInfo">{movie.overview}</div>
              <div className="moreInfo">
                <h1>More Info</h1>
                <hr />
                <div className="subInfo">
                  <div className="genra">
                    Genres:
                    {movie.genres.map((g, i) => (
                      <div className="singleGenra" key={i}>
                        {g}
                      </div>
                    ))}
                  </div>
                  <div className="txtCon">
                    Adult content:
                    <div className="txt">{movie.adult ? "Yes" : "No"}</div>
                  </div>
                  <div className="txtCon">
                    release date:{" "}
                    <div className="txt">{movie.release_date}</div>
                  </div>
                  <div className="txtCon">
                    popularity: <div className="txt">{movie.popularity}</div>
                  </div>
                  <div className="txtCon">
                    Vote: <div className="txt">{movie.vote_count}</div>
                    <span></span> & vote Average:
                    <div className="txt">{movie.vote_average}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="long" />
          <div className="bottom">
            <div className="leftRev">
              <div className="review">
                <button
                  className="createRev"
                  onClick={() => {
                    navigate(`/reviews/${id}`);
                  }}
                >
                  See All Review
                </button>
              </div>
              <div className="review">
                <button className="createRev" onClick={() => setRev(!rev)}>
                  Create Review
                </button>
              </div>
            </div>
            <div className="rightRev">
              {rev ? (
                <div className="Crev">
                  <div className="userFunctions">
                    <div className="rate">
                      <label htmlFor="stars" className="labelStar">
                        Rating:
                      </label>
                      <br />
                      <form className="star-rating" id="stars">
                        <input
                          type="radio"
                          id="star5"
                          name="rating"
                          value="5"
                          onChange={(e) => setRating(e.target.value)}
                        />
                        <label htmlFor="star5" title="5 stars"></label>

                        <input
                          type="radio"
                          id="star4"
                          name="rating"
                          value="4"
                          onChange={(e) => setRating(e.target.value)}
                        />
                        <label htmlFor="star4" title="4 stars"></label>

                        <input
                          type="radio"
                          id="star3"
                          name="rating"
                          value="3"
                          onChange={(e) => setRating(e.target.value)}
                        />
                        <label htmlFor="star3" title="3 stars"></label>

                        <input
                          type="radio"
                          id="star2"
                          name="rating"
                          value="2"
                          onChange={(e) => setRating(e.target.value)}
                        />
                        <label htmlFor="star2" title="2 stars"></label>

                        <input
                          type="radio"
                          id="star1"
                          name="rating"
                          value="1"
                          onChange={(e) => setRating(e.target.value)}
                        />
                        <label htmlFor="star1" title="1 star"></label>
                      </form>
                    </div>
                    <div className="functions">
                      <button
                        className="func"
                        onClick={toggleLike}
                        title="Like"
                      >
                        {like ? "👍 Liked" : "👍"}
                      </button>
                      <button
                        className="func"
                        onClick={toggleDislike}
                        title="DisLike"
                      >
                        {dislike ? "👎 Disliked" : "👎"}
                      </button>
                      <button
                        className="func"
                        title="Favorites"
                        onClick={() => {
                          setFavorite(!favorite);
                        }}
                      >
                        {favorite ? "❤️ Favorited" : "❤️"}
                      </button>
                    </div>
                  </div>

                  <div className="comment">
                    <label htmlFor="commentLabel" className="commentLabel">
                      comment
                    </label>
                    <input
                      type="text"
                      placeholder="write your comment here"
                      className="commentINput"
                      id="commentLabel"
                      onChange={(e) => setComment(e.target.value)}
                    />
                  </div>
                  <div className="sub">
                    <button
                      className="func"
                      onClick={() => {
                        Review({
                          movieId: id,
                          like: like,
                          dislike: dislike,
                          favorite: favorite,
                          rating: rating,
                          comment: comment,
                        });
                      }}
                    >
                      submit
                    </button>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GetMovie;
