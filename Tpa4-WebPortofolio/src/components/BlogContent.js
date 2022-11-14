import "./BlogContentStyles.css"

import "./PricingCardStyles.css"

import React from 'react'
import { Link } from "react-router-dom"

const PricingCard = () => {
  return (
    <div className="pricing">
        <h1 className="project-heading">Tutorial</h1>
        <div className="card-container">
            <div className="card">
                <h3>1</h3>
                <span className="bar"></span>
                <p className="btc">Tutorial IPv6</p>   <br/> <br/>   <br/>   
                
                <Link to="/blog"  className="btn"> Readmore</Link>
            </div>

    
            <div className="card">
                <h3>2</h3>
                <span className="bar"></span>
                <p className="btc">OSPf di Mikrotik </p> <br/> <br/>   <br/> 
             
                <Link to="/blog" className="btn"> Readmore</Link>
            </div>

            <div className="card">
                <h3>3</h3>
                <span className="bar"></span>
                <p className="btc">Belajar coding</p> <br/> <br/>   <br/> 
                
                <Link to="/blog" className="btn"> Readmore</Link>
            </div>

        </div>
    </div>

  )
}

export default PricingCard