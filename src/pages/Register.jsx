import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { RegisterUser } from "../services/Auth";

const Register = () => {
  let navigate = useNavigate();

  const initialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formValues, setFormValues] = useState(initialState);

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await RegisterUser({
      name: formValues.name,
      email: formValues.email,
      password: formValues.password,
    });
    setFormValues(initialState);
    navigate("/signin");
  };

  return (
    <div className="register">
      <label htmlFor="col" className="registerLable">
        Register
      </label>
      <form onSubmit={handleSubmit} className="col" id="col">
        <div className="input-wrapper">
          <label htmlFor="name" className="titleFiled">
            Name
          </label>
          <input
            onChange={handleChange}
            id="name"
            type="text"
            placeholder="John Doe"
            value={formValues.name}
            required
            autoComplete="name"
            className="nameReg"
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="email" className="titleFiled">
            Email
          </label>
          <input
            onChange={handleChange}
            id="email"
            type="email"
            placeholder="example@example.com"
            value={formValues.email}
            required
            autoComplete="email"
            className="emailReg"
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
            className="passReg"
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="confirmPassword" className="titleFiled">
            Confirm Password
          </label>
          <input
            onChange={handleChange}
            type="password"
            id="confirmPassword"
            value={formValues.confirmPassword}
            required
          />
        </div>
        <div className="RegbtnC">
          <button className="Regbtn"
            disabled={
              !formValues.email ||
              (!formValues.password &&
                formValues.password === formValues.confirmPassword)
            }
          >
            Register
          </button>
        </div>
      </form>
      <div className="linkLoginC">
        <label htmlFor="linkReg" className="labsign">Already have an Account?</label>
         <Link to="/signin" id="linkReg" className="linkReg">
        sign In
      </Link>
      </div>
    </div>
  );
};

export default Register;
