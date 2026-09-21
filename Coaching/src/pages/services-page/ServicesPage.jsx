import React from 'react'
import "./ServicesPage.css"
import Header from '../../components/Header'
import FilterSection from './FilterSection'
import ServicesGrid from './ServicesGrid'
import Footer from '../../components/Footer'

export default function ServicesPage() {
  return (
    <div className="services-page">

      <Header/>
      <FilterSection/>
      <ServicesGrid/>
      <Footer/>

    </div>
  )
}
