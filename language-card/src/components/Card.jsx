import Language from "./Language";
import { data } from "../data/data";

const Card = () => {
  return (
    <div className="card">
      {data.map((language) => (
        <Language {...language} key={language.name} />
      ))}
    </div>
  );
};

export default Card;
