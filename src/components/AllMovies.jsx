import { POSTER_PATH } from "../globals";

const AllMovies = ({ movies, moreData }) => {
  return (
    <>
      {movies.map((movie) => (
        <div key={movie.id} className="card">
          <img
            src={`${POSTER_PATH}${movie.backdrop_path}`}
            alt="poster"
            loading="lazy"
          />
          <h3>{movie.title}</h3>
          <button onClick={() => moreData(movie.id)}>View Movie</button>
        </div>
      ))}
    </>
  );
};

export default AllMovies;
