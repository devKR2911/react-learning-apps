import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Personal from "./pages/Personal";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import PersonalDetails from "./pages/PersonalDetails";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="app-wapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/personal" element={<Personal />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/personal/:id" element={<PersonalDetails />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
