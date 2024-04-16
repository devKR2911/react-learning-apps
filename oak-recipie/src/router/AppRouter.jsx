import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Home from "../pages/home/Home";
import Detail from "../pages/detail/Detail";
import About from "../pages/about/About";
import Login from "../pages/login/Login";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="" element={<PrivateRouter />}>
            <Route path="detail" element={<Detail />}></Route>
            <Route path="about" element={<About />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
