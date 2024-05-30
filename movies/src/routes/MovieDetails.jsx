import { useLoaderData } from "react-router-dom";
import { getMovieDetails } from "../services/apiCall";

export const loader = async ({ params }) => {
  const data = await getMovieDetails(params.id);
  console.log(data);
  return data;
};

const MovieDetails = () => {
  const data = useLoaderData();
  const imageBase = "https://image.tmdb.org/t/p/w1280";
  const { title, overview, poster_path } = data;
  return (
    <div>
      <h2>{title}</h2>
      <p>{overview}</p>
      <img src={`${imageBase}${poster_path}`} alt="" />
    </div>
  );
};

export default MovieDetails;
