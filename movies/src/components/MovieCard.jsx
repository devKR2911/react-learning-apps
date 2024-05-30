import { useNavigate } from "react-router-dom";
import styles from "../styles/MovieCard.module.css";

const MovieCard = ({ title, overview, poster_path, id }) => {
  const navigate = useNavigate();
  const imageBase = "https://image.tmdb.org/t/p/w1280";
  return (
    <div className={styles.movieCard} onClick={() => navigate(`/${id}`)}>
      <h2>{title}</h2>
      <p>{overview}</p>
      <img src={`${imageBase}${poster_path}`} alt="" />
    </div>
  );
};

export default MovieCard;
