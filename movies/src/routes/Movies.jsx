import { useEffect } from "react";
import { fetchMovieList, clearMovieList } from "../features/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";
import styles from "../styles/MovieCard.module.css";

const Movies = () => {
  const dispatch = useDispatch();
  const { movieList, loading, error } = useSelector((state) => state.movies);
  useEffect(() => {
    dispatch(fetchMovieList());

    return () => {
      clearMovieList();
    };
  }, [dispatch]);

  return (
    <div>
      {loading && <h2>Loading</h2>}
      {error && <h2>Oops something error happened</h2>}
      <div className={styles.movieList}>
        {movieList &&
          movieList.map((movie) => (
            <MovieCard key={`movie-${movie.id}`} {...movie}></MovieCard>
          ))}
      </div>
    </div>
  );
};

export default Movies;
