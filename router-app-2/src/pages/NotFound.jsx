import errorImg from "../img/404NotFound.png";

const NotFound = () => {
  return (
    <div className="error-wrapper">
      <img src={errorImg} alt="" />
    </div>
  );
};

export default NotFound;
