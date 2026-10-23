import React from 'react'
import './BookingPage.css'
import Header from '../../components/Header'
import OptionsSection from './OptionsSection'
import TimeSlotsSection from './TimeSlotsSection'

export default function BookingPage() {
  return (
    <div className="booking-page">
      <title>Booking Page</title>
      <Header />
      <OptionsSection />
      <TimeSlotsSection/>
    </div>
  )
}
