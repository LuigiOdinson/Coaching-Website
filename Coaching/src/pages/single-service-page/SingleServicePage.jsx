import { useParams } from "react-router";
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ServiceDetails from './ServiceDetails'
import ServiceContent from './ServiceContent'
import ServiceFeedbacks from "./ServiceFeedbacks";
import './SingleServicePage.css'

// the backend will decide which data to send
import {courses} from '../../mock/courses'
import {podcasts} from '../../mock/podcasts'

const serviceData = courses[0];

export default function SingleServicePage() {

  const {serviceId} = useParams();
  // sending requests to backend with serviceId 
  // to get either courses or podcasts

  return (
    <div className="course-page">
      <title></title>

      <Header/>
      <ServiceDetails serviceData={serviceData}/>
      <ServiceContent serviceData={serviceData}/>
      <ServiceFeedbacks serviceFeedbacks={serviceData.feedbacks}/>
      <Footer/>
    </div>
  )
}
