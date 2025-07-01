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
          <Route path="/movies/*" element={<Movies />} />

          <Route path="/profile/*" element={<Profile />} />
          <Route path="/profile/password-update" element={<PasswordUpdate/>} />

          <Route path="/search/*" element={<Search />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default App;
