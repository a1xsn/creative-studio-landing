import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router } from 'react-router-dom';
import AnimRoutes from './components/AnimRoutes';
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return <>
  <Router>
    <Header/>
    <AnimRoutes />
  </Router>
  </>
};

export default App;
