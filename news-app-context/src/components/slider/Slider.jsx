import React, { useState } from "react";
import styles from "./Slider.module.css";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const Slider = ({ sliderNews }) => {
  const [currIndex, setCurrIndex] = useState(0);
  const goNext = () => {
    setCurrIndex(() =>
      currIndex === sliderNews.length - 1 ? 0 : currIndex + 1
    );
  };
  const goPrev = () => {
    setCurrIndex(() =>
      currIndex === 0 ? sliderNews.length - 1 : currIndex - 1
    );
  };

  return (
    <div>
      {sliderNews.length > 0 && (
        <div className={styles.sliderContainer}>
          <FaArrowAltCircleLeft className={styles.iconLeft} onClick={goPrev} />
          <FaArrowAltCircleRight
            className={styles.iconRight}
            onClick={goNext}
          />
          <div className={styles.imageContainer}>
            <img src={sliderNews[currIndex].urlToImage} alt="img" />
          </div>
          <p>Current Index = {currIndex}</p>
          <p>{sliderNews[currIndex].title}</p>
        </div>
      )}
    </div>
  );
};

export default Slider;
