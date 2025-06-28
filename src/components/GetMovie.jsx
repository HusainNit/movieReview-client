import { POSTER_PATH } from "../globals";
import { useParams } from "react-router-dom";

const GetMovie = ({ movies, unSelect }) => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === Number(id));

  return (
    <>
      {movie && (
        <div className="card alone">
          <img src={`${POSTER_PATH}${movie.backdrop_path}`} alt="poster" />
          <h3>{movie.title}</h3>
          <button onClick={() => unSelect()}>Unselect</button>
          <p>
            adult: {movie.adult ? <small>true</small> : <small>false</small>}
            <br />
            popularity: {movie.popularity}
            <br />
            release_date: {movie.release_date}
            <br />
            vote_average: {movie.vote_average}
            <br />
            vote_count: {movie.vote_count}
          </p>
        </div>
      )}
    </>
  );
};

export default GetMovie;
