import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import BlogContent from '../components/BlogContent'

const Blog = () => {
  return (
    <div>
        <Navbar />
        <HeroImg2 heading="BLOG." text="Tutorial" />
        <BlogContent />
 
        <Footer />


    </div>
  )
}

export default Blog