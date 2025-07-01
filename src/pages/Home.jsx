import { useNavigate } from "react-router-dom";
const Home = () => {
  let navigate = useNavigate();
  return (
    <div className="home">
      <div className="hero">
        <div className="animated-bg">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="hero-content">
          <h1>Find Your Next Favorite Movie 🎬</h1>
          <p>Browse honest reviews, and rate your favorite films.</p>
          <button
            onClick={() => {
              navigate("/signin");
            }}
          >
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
