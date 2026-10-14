import {useContext} from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import UserAccount from './UserAccount.jsx'
import MyServices from './MyServices.jsx'
import MyBookingSchedule from './MyBookingSchedule.jsx'

import { myServices } from '../../mock/myServices.js'
import "./ProfilePage.css"

export default function ProfilePage() {
  return (
    <div className="profile-page">
      <title>My Profile</title>

      <Header />
      <UserAccount />
      <MyServices myServices={myServices.courses} type="course"/>
      <MyServices myServices={myServices.podcasts} type="podcast"/>
      <MyBookingSchedule myBookings={myServices.bookings}/>
      <Footer />
    </div>
  )
}
