import React from 'react'
import Header from '../Components/Header'
import Companies from '../Components/Companies'
import Skilline from '../Components/Skilline'
import Features from '../Components/Features'
import Testimonials from '../Components/Testimonials'
import News from '../Components/News'
import Footer from '../Components/Footer'

function HomePage() {
  return (
    <div>
      <Header/>
      <Companies/>
      <Skilline/>
      <Features/> 
      <Testimonials/>
      <News/>
      <Footer/>
    </div>
  )
}

export default HomePage
