import {useState} from 'react'
import './BookingPage.css'
import Header from '../../components/Header'
import OptionsSection from './OptionsSection'
import TimeSlotsSection from './TimeSlotsSection'
import BookingSummary from './BookingSummary'

export default function BookingPage() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedSlots, setSelectedSlots] = useState([]);

  return (
    <div className="booking-page">
      <title>Booking Page</title>
      <Header />
      <OptionsSection selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
      <TimeSlotsSection selectedSlots={selectedSlots} setSelectedSlots={setSelectedSlots}/>
      <BookingSummary selectedOption={selectedOption} selectedSlots={selectedSlots}/>
    </div>
  )
}
