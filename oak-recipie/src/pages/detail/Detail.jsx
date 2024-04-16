import { useLocation } from "react-router-dom";
import "./Detail.css";
const Detail = () => {
  const { state } = useLocation();
  const { label } = state;
  return (
    <div>
      <h1>{label}</h1>
    </div>
  );
};

export default Detail;
