import React, { useContext } from "react";
import styles from "./Home.module.css";
import Slider from "../../components/slider/Slider";
import Spinner from "../../components/spinner/Spinner";
import NewsCard from "../../components/newsCard/NewsCard";
import { ThemeContext } from "../../context/ThemeContext";
import useNews from "../../hooks/useNews";

const Home = () => {
  const { state } = useContext(ThemeContext);

  const { news, loading } = useNews();

  return (
    <div
      className={state.darkMode ? styles.darkContainer : styles.lightContainer}
    >
      <div>
        <Slider sliderNews={news}></Slider>
      </div>
      <div>
        {loading && <Spinner></Spinner>}
        {news &&
          news.map((node, index) => (
            <NewsCard {...node} key={`home-news-${index}`}></NewsCard>
          ))}
      </div>
    </div>
  );
};

export default Home;
