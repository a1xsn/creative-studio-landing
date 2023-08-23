import Home from "../pages/Home";
import About from "../pages/About"; 
import Services from "../pages/Services";
import Contact from '../pages/Contact';
import Products from "../pages/Products";
import Bilita from "../pages/Bilita"
import Vanitas from "../pages/Vanitas";
import Zine from "../pages/Zine";
import Chrys from "../pages/Chrys";
import Principles from "../pages/Principles";

import { Routes, Route, useLocation} from 'react-router-dom';
import { AnimatePresence } from "framer-motion";

const AnimRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence initial={true} mode='wait'>
  <Routes key={location.pathname} location={location}>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/services' element={<Services />} />
    <Route path='/products' element={<Products />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/Bilita' element={<Bilita />} />
    <Route path='/Vanitas' element={<Vanitas />} />
    <Route path='/Zine' element={<Zine />} />
    <Route path='/Chrys' element={<Chrys />} />
</ Routes>
</AnimatePresence>
  )
};

export default AnimRoutes;
