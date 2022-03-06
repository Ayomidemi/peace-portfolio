import './App.scss';
import React from 'react'

import SideBar from './components/SideBar';
import Home from './pages/Home'
import Blog from './pages/Blog'
import About from './pages/About';
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'


import { BrowserRouter, Routes, Route, } from "react-router-dom";
// import your route components too

const App = () => {
  return (
    <BrowserRouter>

    <SideBar />

    <div className='main-content'>
      <div className='content'>
       

    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="about" element={<About />} />
       <Route path="blog" element={<Blog />} />
       <Route path="portfolio" element={<Portfolio />} />
       <Route path="contact" element={<Contact />} />

        
     </Routes>
 </div>
      </div>

   </BrowserRouter>
  )
}

export default App