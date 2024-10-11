import React from 'react';

import Home from './pages/Home';
import SingleProject from './pages/SingleProject';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/single-property' element={<SingleProject />} />
          
          {/* <Route path='/' element={<About />} />
          <Route path='/' element={<Contact />} />
          <Route path='/' element={<Projects />} /> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App