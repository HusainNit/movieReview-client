import { useState } from "react";
import { imgData } from "../services/profile";

import CustemPopUp from "../components/CustemPopUp";

const ImgUpdate = ({ user }) => {
  const [popup, setPopup] = useState(null);

  const initialState = { imgpath: "" };

  const [formValues, setFormValues] = useState(initialState);

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await imgData(formValues);
    setFormValues(initialState);

    if (res?.success) {
      setPopup({
        text: "image updated successfully!",
        status: "ok",
        route: "/profile",
      });
    } else {
      setPopup({
        text: "Something went wrong while submitting the image path.",
        route: "fail",
        status: "/profile",
      });
    }
  };

  const handleClosePopup = () => {
    setPopup(null);
  };

  return (
    <div className="signin">
      {user ? (
        <>
          <label htmlFor="col" className="signInLable">
            Password Update
          </label>

          <form className="col" id="col" onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="imgpath" className="titleFiled">
                Image URL
              </label>
              <input
                onChange={handleChange}
                type="String"
                id="imgpath"
                value={formValues.password}
                required
                className="passLogin"
              />
            </div>
            <div className="btnLoginC">
              <button className="btnlogin" disabled={!formValues.imgpath}>
                Update Image
              </button>
            </div>
          </form>
        </>
      ) : (
        <div className="protected">
          <h3>You must be signed in to do that!</h3>
          <button onClick={() => navigate("/signin")}>Sign In</button>
        </div>
      )}
      {popup && (
        <CustemPopUp
          text={popup.text}
          route={popup.route}
          onClose={handleClosePopup}
          status={popup.status}
        />
      )}
    </div>
  );
};

export default ImgUpdate;
