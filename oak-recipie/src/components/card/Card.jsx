import { useNavigate } from "react-router-dom";
import "./Card.css";

const Card = ({ recipie }) => {
  const navigate = useNavigate();
  return (
    <div className="recipie-card">
      <h2>{recipie.label}</h2>
      <img src={recipie.image} alt="" srcset="" />
      <div>
        <button onClick={() => navigate("/detail", { state: recipie })}>
          More Details
        </button>
      </div>
    </div>
  );
};

export default Card;
