import { POSTER_PATH } from "../globals";
import { useParams } from "react-router-dom";

const GetMovie = ({ movies, unSelect }) => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === Number(id));

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
                    {movie.genres.map((g) => (
                      <div className="singleGenra">{g}</div>
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
            <div className="userFunctions">
              <button className="func">👍</button>
              <button className="func">👎</button>
              <button className="func">❤️</button>
            </div>

            <div className="comment">
              <h1>comments</h1>
              <div>
                <input type="text" placeholder="write your comment here" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GetMovie;
