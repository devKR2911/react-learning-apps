import { useContext } from "react";
import ChangeThemeBtn from "./ChangeThemeBtn";
import Footer from "./Footer";
import Main from "./Main";
import ThemeContext from "../context/ThemeContext";

const Container = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`container ${theme}`}>
      <ChangeThemeBtn></ChangeThemeBtn>
      <hr />
      <Main></Main>
      <hr />
      <Footer></Footer>
    </div>
  );
};

export default Container;
