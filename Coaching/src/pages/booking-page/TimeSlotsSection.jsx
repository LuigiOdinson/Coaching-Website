import React from 'react'
import formatPersianDate from '../../helpers/formatPersianDate'
import { availability } from '../../mock/availability'

export default function TimeSlotsSection() {

  return (
    <div className="time-slots-section">
      <h2 className="section-title">لطفا زمان مشاوره را انتخاب کنید</h2>

      <div className="schedule-grid">
        {availability.map((dateTime) => (
          <div className="schedule-card">

            <div className="schedule-card-header">
              <span className="schedule-date">{formatPersianDate(dateTime.date)}</span>
            </div>

            <div className="schedule-card-body">
              {dateTime.slots.map((slot) => (
                <div className="schedule-row">
                  <span className="schedule-time">
                    {slot.startTime} - {slot.endTime}
                  </span>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

    </div>
  )
}
