import "./AboutContetntStyles.css";

import React from 'react'

import foto2 from "../assets/aca.png"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Hallo</h1>
            <p>Saya Salsabilla Pramudta, Saya berasal dari Politeknik Negeri Padang, dengan Jurusan Teknologi Informasi, Program Studi D4-Teknologi Rekayasa Perangkat Lunak
                Lahir di Pariaman, 15 Mei 2003</p>
              
        </div>
        <div className="right">
            <div className="img-container">
      
                <div className="img-stack bottom">
                    <img src={foto2} className="img" alt="true" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent