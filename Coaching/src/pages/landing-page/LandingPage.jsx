import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './LandingPage.css'
import Header from '../../components/Header';
import Hero from './Hero'
import Services from './Services'
import AboutMe from './AboutMe'
import Feedbacks from './Feedbacks'
import Footer from '../../components/Footer';

export default function LandingPage() {
  return (
    <div className="landing-page">
      <title>Coaching</title>

      <Header/>
      <Hero/>
      <Services/>
      <AboutMe/>
      <Feedbacks/>
      <Footer/>

    </div>
  )
}
