import {useState} from 'react'
import formatPersianDate from '../../helpers/formatPersianDate'
import { availability } from '../../mock/availability'

export default function TimeSlotsSection({selectedSlots, setSelectedSlots}) {

  const toggleSelected = (slotId) => {
    setSelectedSlots((prev) => 
      prev.includes(slotId)
        ? selectedSlots.filter(i => i != slotId)
        : [...prev, slotId]
    );
  }

  return (
    <div className="time-slots-section">
      <h2 className="section-title">لطفا زمان مشاوره را انتخاب کنید</h2>

      <div className="schedule-grid">
        {availability.map((dateTime) => (
          <div key={dateTime.id} className="schedule-card">

            <div className="schedule-card-header">
              <span className="schedule-date">{formatPersianDate(dateTime.date)}</span>
            </div>

            <div className="schedule-card-body">
              {dateTime.slots.map((slot) => {
                const isSelected = selectedSlots.includes(slot.id);

                return (
                  <div key={slot.id} className="schedule-row" onClick={() => toggleSelected(slot.id)}>
                    {isSelected && <span className="check">✓</span>}
                    <span className={`schedule-time ${isSelected ? 'selected' : ''}`}>
                      {slot.startTime} - {slot.endTime}
                    </span>
                  </div>
                )
              })}
            </div>

          </div>
        ))}
      </div>

    </div>
  )
}
