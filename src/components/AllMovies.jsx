import { POSTER_PATH } from "../globals";

const AllMovies = ({ movies, moreData }) => {
  return (
    <>
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="card all"
          onClick={() => moreData(movie.id)}
        >
          <img
            src={`${POSTER_PATH}${movie.backdrop_path}`}
            alt="poster"
            loading="lazy"
          />
          <h3>{movie.title}</h3>
        </div>
      ))}
    </>
  );
};

export default AllMovies;
