import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Booking from "../pages/Booking";
import Contact from "../pages/Demo";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import Portfolio from "../components/sections/Portfolio";
import Demo from "../pages/Demo";
import Review from "../pages/Review";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="demo" element={<Demo />} />
      <Route path="/reviews" element={<Review />} />
    </Routes>  
  );
};

export default AppRoutes;
