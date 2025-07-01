import { useState } from "react";
import { PasswordUpdateAuth } from "../services/Auth";
import CustemPopUp from "../components/CustemPopUp";

const PasswordUpdate = () => {
  const [popup, setPopup] = useState(null);

  const initialState = { password: "", oldpassword: "" };

  const [formValues, setFormValues] = useState(initialState);

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await PasswordUpdateAuth(formValues);
    setFormValues(initialState);

    if (res?.success) {
      setPopup({
        text: "password updated successfully!",
        status: "ok",
        route: "/profile",
      });
    } else {
      setPopup({
        text: "Something went wrong while submitting the passwordUpdate.",
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
      <label htmlFor="col" className="signInLable">
        Password Update
      </label>

      <form className="col" id="col" onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="oldpassword" className="titleFiled">
            OldPassword
          </label>
          <input
            onChange={handleChange}
            type="password"
            id="oldpassword"
            value={formValues.oldpassword}
            required
            className="passLogin"
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password" className="titleFiled">
            Password
          </label>
          <input
            onChange={handleChange}
            type="password"
            id="password"
            value={formValues.password}
            required
            className="passLogin"
          />
        </div>
        <div className="btnLoginC">
          <button
            className="btnlogin"
            disabled={!formValues.oldpassword || !formValues.password}
          >
            Update Password
          </button>
        </div>
      </form>
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

export default PasswordUpdate;
