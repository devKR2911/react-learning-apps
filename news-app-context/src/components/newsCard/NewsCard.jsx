import React from "react";
import styles from "./NewsCard.module.css";

const NewsCard = ({ title, content, description, urlToImage, url }) => {
  return (
    <div className={styles.newsCard}>
      <h3>{title}</h3>
      <img src={urlToImage} alt={title} />
      <p>{content}</p>
      <a href={url} target="_blank">
        Read More
      </a>
    </div>
  );
};

export default NewsCard;
