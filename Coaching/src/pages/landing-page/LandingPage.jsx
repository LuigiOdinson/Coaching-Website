import React from 'react'
import './LandingPage.css'
import Hero from './Hero'
import Services from './Services'

export default function LandingPage() {
  return (
    <div className="landing-page">
      <title>Coaching</title>

      <Hero/>
      <Services/>

    </div>
  )
}
