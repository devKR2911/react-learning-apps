import React, { useEffect, useState } from "react";
import styles from "./Search.module.css";
import { useLocation } from "react-router-dom";
import NewsCard from "../../components/newsCard/NewsCard";

const Search = () => {
  const { state } = useLocation();
  const [news, setNews] = useState("");
  console.log(state);

  const API_KEY = process.env.REACT_APP_API_KEY;
  const url = `https://newsapi.org/v2/top-headlines?q=${state}&apiKey=${API_KEY}`;
  const fetchData = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNews(data.articles);
      })
      .catch((err) => console.err("error happened while search"));
  };
  useEffect(() => {
    fetchData();
  }, [url]);

  return (
    <div className={styles.searchContainer}>
      <h1>Top news related to {state}</h1>
      <div className={styles.searchResultsContainer}>
        {news &&
          news.length > 0 &&
          news.map((data, index) => (
            <NewsCard {...data} key={`news-${index}`}></NewsCard>
          ))}
        {news && news.length === 0 && <h4>No data related to {state}</h4>}
      </div>
    </div>
  );
};

export default Search;
