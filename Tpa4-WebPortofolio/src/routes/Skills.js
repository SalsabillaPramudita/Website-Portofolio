import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import PricingCard from '../components/PricingCard'
import Work from '../components/Work'


const Skills = () => {
  return (
    <div>
        <Navbar />
        <HeroImg2 heading="SKILLS." text="some of learn" />
  

        <PricingCard />
        <Work />
 
        <Footer />


    </div>
  )
}

export default Skills