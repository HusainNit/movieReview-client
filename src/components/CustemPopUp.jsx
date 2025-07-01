import { Link } from "react-router-dom";

const CustemPopUp = ({ text, route, onClose, status }) => {
  return (
    <div className="popUp">
      <div className="content">
        <h1>{text}</h1>
        <div className="action">
          {status === "ok" ? (
            <Link to={route}>Go back</Link>
          ) : (
            <div className="popputtonc">
              <button onClick={() => onClose()} className="popputton">Close</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustemPopUp;
