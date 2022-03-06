import React from 'react'
import {NavLink} from 'react-router-dom'
import avatar from '../img/pro2.png'


const NavBar = () => {
  return (
    <div className="NavBar">
            <nav className="nav">
                <div className="profile">
                    <img src={avatar} alt=""/>
                 </div>

                <ul className="nav-items">
                    <li className="nav-item">
                    <NavLink to="/" style={{ textDecoration: 'none' }} >
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to="about" style={{ textDecoration: 'none' }} >
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        
                    <NavLink to="portfolio" style={{ textDecoration: 'none' }}>
                            Portfolio
                        </NavLink>
                       
                    </li>
                    <li className="nav-item">
                    <NavLink to="blog" style={{ textDecoration: 'none' }} >
                            Blog
                        </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to="contact" style={{ textDecoration: 'none' }} >
                            Contact 
                        </NavLink>
                    </li>
                </ul>

                <footer className="footer">
                    <p>
                    @2022 Peace Adeniji
                    </p>
            </footer>
            </nav>
            
        </div>
  )
}

export default NavBar