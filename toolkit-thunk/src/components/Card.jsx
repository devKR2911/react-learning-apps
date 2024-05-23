import React from "react";
import styles from "../styles/Card.module.css";

const Card = ({
  author,
  title,
  description,
  url,
  urlToImage,
  publishedAt,
  content,
}) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={urlToImage} alt="img" />
      <p>Author {author}</p>
      <a href={url}>Read More</a>
      <small>{publishedAt}</small>
    </div>
  );
};

export default Card;
