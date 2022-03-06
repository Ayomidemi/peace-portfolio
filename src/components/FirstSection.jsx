import React from 'react'
import about from '../img/pro1.jpg'
import cv from '../img/CV.pdf'

const FirstSection = () => {
  return (
    <div className='firstsect'>
       <div className='img'>
           <img src={about} alt="/" />

       </div>

       <div className="about-info">
                <h4>I'm<span> Peace Adeniji</span></h4>
                <p className="about-text">
                My expertise is in the area of responsive design. With every line of code, I strive
                to make the web a beautiful place. Welcome to my space and let's make something special!
                </p>
                
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Education</p>
                        <p>Address</p>
                    </div>
                    <div className="right-section">
                        <p>: Peace Adeniji</p>
                        <p>: Nigerian</p>
                        <p>: English, French</p>
                        <p>: University of Lagos</p>
                        <p>: Lagos, Nigeria</p>
                    </div>
                </div>
                <a href = {cv} download >
                     <button className="btn">Download Cv</button>
                    </a>
               
        </div>
        </div>
  )
}

export default FirstSection