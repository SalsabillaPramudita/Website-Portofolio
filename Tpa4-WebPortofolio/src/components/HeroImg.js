import "./HeroImgStyles.css";

import React from 'react'
import Intro from "../assets/gambar1.PNG"
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
   
    <div className="hero">
        <div className="mask">
        <img className="intro-img" src={Intro} alt="introImg" />    
   
        </div>

      <div className="content">
          <p>Hallo, Saya Salsa.</p>
          <h1>Peserta Front End Web Development</h1>
          <div>
              <Link to="/skills" className="btn" > Skills</Link>
              <Link to="/about" className="btn btn-light" > About Me</Link>
          </div>


      </div>
    </div>


  )
}

export default HeroImg