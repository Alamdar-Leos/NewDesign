import React from 'react';

import Home from './pages/Home';
import SingleProject from './pages/SingleProject';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
const App = () => {
  return (
    <>
    <Router>

      {/* Calling Header Section Start*/}
      <Header />
      {/* Calling Header Section End*/}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/single-property' element={<SingleProject />} />

      </Routes>

      {/* Calling Footer Section Start*/}
      {/* <Footer /> */}
      {/* Calling Footer Section End*/}

    </Router>
    </>
  )
}

export default App