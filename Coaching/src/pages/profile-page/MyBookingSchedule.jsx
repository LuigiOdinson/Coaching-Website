import React from 'react'

export default function MyBookingSchedule({ myBookings }) {
  const far_session_type_tag = {
    "online": "آنلاین",
    "inPerson": "حضوری",
    "freeSession": "رایگان"
  }

  const formatPersianDate = (isoDate) => {
    const date = new Date(isoDate);
    return new Intl.DateTimeFormat("fa-IR", {
      calendar: "persian",
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  };

  return (
    <div className="my-booking-schedule">
      <section class="schedule-section">
        <h2 class="section-title">برنامه جلسات کوچینگ</h2>

        <div class="schedule-grid">
          {myBookings.map((booking) => (
            <div class="schedule-card">
              <div class="schedule-card-header">
                <span class="schedule-date">{formatPersianDate(booking.date)}</span>
              </div>

              <div class="schedule-card-body">
                {booking.slots.map((slot) => (
                  <div class="schedule-row">
                    <span class="tag">{far_session_type_tag[slot.sessionType]}</span>
                    <span class="schedule-time">{slot.startTime} - {slot.endTime}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}

        </div>
      </section>
    </div>
  )
}
