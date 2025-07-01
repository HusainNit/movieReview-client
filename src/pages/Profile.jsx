import { useState, useEffect } from "react";

import { ProfileData } from "../services/profile";
import { useNavigate } from "react-router-dom";

const Profile = ({ user }) => {
  let navigate = useNavigate();
  const [profData, setProfData] = useState(null);

  useEffect(() => {
    const handleProfileData = async () => {
      const data = await ProfileData();
      setProfData(data);
    };
    handleProfileData();
  }, []);

  return (
    <div className="profileContainer">
      {user ? (
        profData ? (
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
              <button
                onClick={() => {
                  navigate("/profile/img-update");
                }}
              >
                Update Profile Image
              </button>
              <button
                onClick={() => {
                  navigate("/profile/My-Favorites");
                }}
              >
                My Favorites
              </button>
              <button
                onClick={() => {
                  navigate("/profile/My-Reviews");
                }}
              >
                My Reviews
              </button>
            </div>
          </>
        ) : (
          <p className="loading">Loading profile...</p>
        )
      ) : (
        <div className="protected">
          <h3>You must be signed in to do that!</h3>
          <button onClick={() => navigate("/signin")}>Sign In</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
