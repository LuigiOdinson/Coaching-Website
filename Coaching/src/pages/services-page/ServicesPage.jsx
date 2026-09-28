import {useState} from 'react'
import "./ServicesPage.css"
import Header from '../../components/Header'
import CoachingCard from './CoachingCard'
import FilterSection from './FilterSection'
import ServicesGrid from './ServicesGrid'
import Footer from '../../components/Footer'

export default function ServicesPage() {

  const [filter, setFilter] = useState("all");

  return (
    <div className="services-page">
      <title>Services Page</title>
      
      <Header/>
      <CoachingCard/>
      <FilterSection filter={filter} setFilter={setFilter}/>
      <ServicesGrid filter={filter}/>
      <Footer/>

    </div>
  )
}
