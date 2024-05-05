import { useEffect, useState } from "react";

const useNews = (initialCategory = "", initialCountry = "us") => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState([]);
  const [country, setCountry] = useState(initialCountry);
  const [category, setCategory] = useState(initialCategory);

  const API_KEY = process.env.REACT_APP_API_KEY;
  const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}&category=${category}`;
  const fetchData = () => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setNews(data.articles);
      })
      .catch((err) => {
        setLoading(false);
        console.log("Error happened while fetching data");
      });
  };

  useEffect(() => {
    console.log(category);
    fetchData();
  }, [category]);

  return {
    news,
    loading,
    country,
    setCategory,
    setCountry,
    fetchData,
  };
};

export default useNews;
