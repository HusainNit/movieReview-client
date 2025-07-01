import { Link } from "react-router-dom";

const CustemPopUp = ({ text, route, onClose }) => {
  return (
    <div className="popUp">
      <div className="content">
        <h1>{text}</h1>
        <div className="action">
          {route === "ok" ? (
            <Link to="/movies">Go to Movies</Link>
          ) : (
            <button onClick={() => onClose()}>Close</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustemPopUp;
