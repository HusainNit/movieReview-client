import { useState, useEffect } from "react";
import { GetMovies } from "../services/MoviesGetter";
import { Route, Routes, useNavigate } from "react-router-dom";
import AllMovies from "../components/AllMovies";
import GetMovie from "../components/GetMovie";

const Movies = () => {
  let navigate = useNavigate();
  const [movies, setMovies] = useState([]);

  const moreData = (id) => {
    navigate(`/movies/${id}`);
  };

  const unSelect = () => {
    navigate("/movies");
  };

  useEffect(() => {
    const handleMovies = async () => {
      const data = await GetMovies();
      setMovies(data);
    };
    handleMovies();
  }, []);

  return (
    <div className="grid">
      <Routes>
        <Route
          path="/"
          element={<AllMovies movies={movies} moreData={moreData} />}
        />
        <Route
          path="/:id"
          element={<GetMovie movies={movies} unSelect={unSelect} />}
        />
      </Routes>
    </div>
  );
};

export default Movies;
