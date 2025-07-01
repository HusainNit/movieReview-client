import { useState, useEffect } from "react";

import { ProfileData } from "../services/profileDataGetter";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  let navigate = useNavigate();
  const [profData, setProfData] = useState(null);
  const [myReviews, setMyReviews] = useState([]);
  const [myFavorites, setMyFavorites] = useState([]);

  useEffect(() => {
    const handleProfileData = async () => {
      const data = await ProfileData();
      setProfData(data);
      setMyReviews(data.reviews);
      setMyFavorites(data.favorites);
    };
    handleProfileData();
  }, []);

  return (
    <div className="profileContainer">
      {profData ? (
        <>
          <div className="profileimg">
            <img
              src={profData.profileImg || "../images/profile-icon.jpg"}
              alt="profile image"
              className="imgSrc"
            />
          </div>
          <div className="profileData">
            <h1>{profData.name}</h1>
            <h3>{profData.email}</h3>
          </div>
          <div className="Profielaction">
            <button
              onClick={() => {
                navigate("/profile/password-update");
              }}
            >
              Update Password
            </button>
            <button>Update Profile Image</button>
            <button>My Favorites </button>
            <button>My Reviews </button>
          </div>
        </>
      ) : (
        <p className="loading">Loading profile...</p>
      )}
    </div>
  );
};

export default Profile;
