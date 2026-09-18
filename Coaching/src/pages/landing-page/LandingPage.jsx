import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './LandingPage.css'
import Hero from './Hero'
import Services from './Services'
import AboutMe from './AboutMe'
import Feedbacks from './Feedbacks'

export default function LandingPage() {
  return (
    <div className="landing-page">
      <title>Coaching</title>

      <Hero/>
      <Services/>
      <AboutMe/>
      <Feedbacks/>

    </div>
  )
}
