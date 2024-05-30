import axios from "axios";

export const getMovies = async () => {
  const API_KEY = import.meta.env.VITE_APP_API_KEY;
  const FEATURES_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=`;

  try {
    const { data } = await axios(FEATURES_API);
    return data.results;
  } catch (err) {
    return err;
  }
};

export const getMovieDetails = async (id) => {
  const API_KEY = import.meta.env.VITE_APP_API_KEY;
  const FEATURES_API = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;

  try {
    const { data } = await axios(FEATURES_API);
    return data;
  } catch (err) {
    return err;
  }
};
