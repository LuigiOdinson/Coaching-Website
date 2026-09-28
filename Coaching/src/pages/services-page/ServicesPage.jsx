import React from 'react'
import "./ServicesPage.css"
import Header from '../../components/Header'
import CoachingCard from './CoachingCard'
import FilterSection from './FilterSection'
import ServicesGrid from './ServicesGrid'
import Footer from '../../components/Footer'

export default function ServicesPage() {
  return (
    <div className="services-page">

      <Header/>
      <CoachingCard/>
      <FilterSection/>
      <ServicesGrid/>
      <Footer/>

    </div>
  )
}
