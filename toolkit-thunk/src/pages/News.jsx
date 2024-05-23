import React, { useEffect } from "react";
import styles from "../styles/News.module.css";
import { useSelector, useDispatch } from "react-redux";
import { clearNewsList, getNews } from "../features/newsSlice";
import Card from "../components/Card";

const News = () => {
  const { newsList, error, loading } = useSelector((state) => state.news);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews());

    return () => {
      dispatch(clearNewsList());
    };
  }, [dispatch]);

  return (
    <div>
      <h1>News</h1>
      {loading && <h2>Loading</h2>}
      {error && <h2>Oops something went wrong</h2>}
      {!loading && (
        <div>
          {newsList.map((news, index) => (
            <Card {...news}></Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default News;
