import React from 'react'
import { useState } from 'react';

import NavBar from '../components/NavBar'

const SideBar = () => {
  
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () =>{
    setNavToggle(!navToggle)
  }

  return (
    <div className='App'>
      <div className={`sidebar ${navToggle ? 'nav-toggle': ''}`}>
     
        <NavBar />
      </div>

      <div className="nav-btn" onClick={navClick}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
      </div>
      
    </div>
  )
}

export default SideBar