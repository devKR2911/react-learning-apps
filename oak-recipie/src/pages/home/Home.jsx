import { useState, useEffect } from "react";
import "./Home.css";
import axios from "axios";
import Header from "../../components/header/Header";
import Card from "../../components/card/Card";
import homeImg from "../../assets/home.png";

const Home = () => {
  const appId = process.env.REACT_APP_ID;
  const appKey = process.env.REACT_APP_KEY;
  const [query, setQuery] = useState("");
  const [recipies, setRecipies] = useState([]);

  const [selectedMeal, setSelectedMeal] = useState("");
  const url = ` https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}&mealType=${selectedMeal}`;

  const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];

  const getData = async () => {
    try {
      const { data } = await axios.get(url);
      setRecipies(data.hits);
    } catch (err) {
      console.error(err);
    }
  };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div className="home-wrapper">
      <Header
        query={query}
        setQuery={setQuery}
        selectedMeal={selectedMeal}
        setSelectedMeal={setSelectedMeal}
        mealTypes={mealTypes}
        getData={getData}
      ></Header>
      <div className="recipies-wrapper">
        {recipies.length === 0 ? (
          <img src={homeImg} className="home-img" alt="home" />
        ) : (
          <div className="recipie-list">
            {recipies.map((recipie) => (
              <Card recipie={recipie.recipe} key={recipie.recipe.label}></Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
