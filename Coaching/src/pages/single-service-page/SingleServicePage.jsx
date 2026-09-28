import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ServiceDetails from './ServiceDetails'
import ServiceContent from './ServiceContent'
import './SingleServicePage.css'

// the backend will decide which data to send
import {courses} from '../../mock/courses'
import {podcasts} from '../../mock/podcasts'

const serviceData = courses[0];

export default function SingleServicePage() {
  return (
    <div className="course-page">
      <title></title>

      <Header/>
      <ServiceDetails serviceData={serviceData}/>
      <ServiceContent serviceData={serviceData}/>
      <Footer/>
    </div>
  )
}
