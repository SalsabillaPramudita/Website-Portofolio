import "./FooterStyles.css"
 import React from 'react'
 import { FaHome, FaPhone, FaMailBulk, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"
 
 const Footer = () => {
   return (
     <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <h4>
                 <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />Pariaman
                 </h4>
                </div>

                <div className="phone">
                    <h4>
                    <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} /> 081267194848   
                
                    </h4>
                </div>
                
                <div className="email">
                    <h4>
                    <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} /> salsaprmudta@gmail.com 
                
                    </h4>
                </div>
                
            </div>

            <div className="right">
                <h4>About Me</h4>
                <p> Studi Independent Bersertifikat Kampus Merdeka. Saya merasa senang berada dalam program ini. Jadilah talenta digital</p>

                <div className="social">
                <FaLinkedin size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                
                <FaTwitter size={20} style={{ color: "#fff", marginRight: "2rem" }} /> 
                
                <FaInstagram size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                

                </div>
            </div>
         

        </div>
     </div>
   )
 }
 
 export default Footer