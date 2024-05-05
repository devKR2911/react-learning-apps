import React, { useEffect, useState } from "react";
import styles from "./Categories.module.css";
import { useLocation } from "react-router-dom";
import Spinner from "../../components/spinner/Spinner";
import NewsCard from "../../components/newsCard/NewsCard";
import useNews from "../../hooks/useNews";

const Categories = () => {
  const { state } = useLocation();

  const { news, loading, setCountry, country, setCategory, fetchData } =
    useNews(state.category);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  useEffect(() => {
    setCategory(state.category);
  }, [state.category]);

  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className={styles.rightPanel}>
        {loading && <Spinner></Spinner>}
        {news &&
          news.map((item, index) => (
            <NewsCard {...item} key={index}></NewsCard>
          ))}
      </div>
    </div>
  );
};

export default Categories;
