import "./PricingCardStyles.css"

import React from 'react'
import { Link } from "react-router-dom"

const PricingCard = () => {
  return (
    <div className="pricing">
        <h1 className="project-heading">Pencapaian</h1>
        <div className="card-container">
            <div className="card">
                <h3>1</h3>
                <span className="bar"></span>
                <p className="btc">Firetech Neotelemetri</p>
                <p>Juara 1 Lomba Mikrotik se-Sumbar, Riau, Jambi tingkat Siswa Smk 2019</p><br/>
                <Link to="/blog" className="btn"> Readmore</Link>
            </div>

    
            <div className="card">
                <h3>2</h3>
                <span className="bar"></span>
                <p className="btc">Olimpiade APJII 2019 </p>
                <p>Peserta Olimpiadi Mikrotik Apjii 2019 di tingkat Nasional</p><br/>
                <Link to="/blog" className="btn"> Readmore</Link>
            </div>

            <div className="card">
                <h3>3</h3>
                <span className="bar"></span>
                <p className="btc">LKS 2019</p> <br/>
                <p>Peserta Lomba Kegiatan Siswa antar Siswa SMK tingkat Provinsi Sumbar</p><br/><br/>
                <Link to="/blog" className="btn"> Readmore</Link>
            </div>

        </div>
    </div>

  )
}

export default PricingCard