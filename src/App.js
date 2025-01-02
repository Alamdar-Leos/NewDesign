import React, { useState } from 'react';
import Home from './pages/Home';
import SingleProject from './pages/SingleProject';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import { FilterProvider } from './context/FilterContext';  // Import the FilterProvider
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  return (
    <FilterProvider>
      <Router>
        {/* Calling Header Section Start */}
        <Header />
        {/* Calling Header Section End */}

        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/single-property" element={<SingleProject />} /> */}
          <Route path="/:id" element={<SingleProject />} />
          
        </Routes>

        {/* Calling Footer Section Start */}
        {/* <Footer /> */}
        {/* Calling Footer Section End */}
      </Router>
    </FilterProvider>
  );
};

export default App;
