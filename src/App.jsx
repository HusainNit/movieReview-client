import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";

import Home from "./pages/Home";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import Search from "./pages/Search";
import Nav from "./components/Nav";
import Movies from "./pages/Movies";
import axios from "axios";
import { GetMovies } from "./services/MoviesGetter";
import { CheckSession } from "./services/Auth";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import PasswordUpdate from "./pages/PasswordUpdate";
import ImgUpdate from "./pages/ImgUpdate";
import MyFavorites from "./pages/MyFavorites";
import MyReviews from "./pages/MyReviews";
import MovieReviews from "./pages/MovieReviews";

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    setUser(null);
    localStorage.clear();
  };

  const checkToken = async () => {
    const user = await CheckSession();
    setUser(user);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      checkToken();
    }
  }, []);

  return (
    <>
      <Nav user={user} handleLogOut={handleLogOut} />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/movies/*" element={<Movies user={user} />} />

          <Route path="/profile/*" element={<Profile user={user} />} />
          <Route
            path="/profile/password-update"
            element={<PasswordUpdate user={user} />}
          />
          <Route
            path="/profile/img-update"
            element={<ImgUpdate user={user} />}
          />
          <Route
            path="/profile/My-Favorites"
            element={<MyFavorites user={user} />}
          />

          <Route
            path="/profile/My-Reviews"
            element={<MyReviews user={user} />}
          />

            <Route
            path="/reviews/:id"
            element={<MovieReviews user={user}/>}
          />

          <Route path="/search/*" element={<Search user={user} />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default App;
