import React from 'react'
import formatPersianDate from '../../helpers/formatPersianDate'

export default function MyBookingSchedule({ myBookings }) {
  const far_session_type_tag = {
    "online": "آنلاین",
    "inPerson": "حضوری",
    "freeSession": "رایگان"
  }

  const hasOnlineOrFree = myBookings.some((booking) =>
    booking.slots.some((slot) => (slot.sessionType === "online") || (slot.sessionType === "freeSession"))
  );
  const hasInPerson = myBookings.some((booking) =>
    booking.slots.some((slot) => slot.sessionType === "inPerson")
  );

  const onlineLink = "https://meet.google.com/xxx-yyyy-zzz";
  const inPersonAddress = "زنجان، خیابان --، پلاک ۱۲";

  return (
    <div className="my-booking-schedule">
      <section className="schedule-section">
        <h2 className="section-title">برنامه جلسات کوچینگ</h2>

        {myBookings.length === 0 &&
          <div className='section-title' style={{ "font-weight": "300", "font-size": "16px" }}>
            <p>شما جلسه‌ای رزرو نکردید</p>
          </div>
        }

        <div className="schedule-grid">
          {myBookings.map((booking) => (
            <div key={booking.id} className="schedule-card">

              <div className="schedule-card-header">
                <span className="schedule-date">{formatPersianDate(booking.date)}</span>
              </div>

              <div className="schedule-card-body">
                {booking.slots.map((slot) => (
                  <div key={slot.id} className="schedule-row">
                    <span className="tag">{far_session_type_tag[slot.sessionType]}</span>
                    <span className="schedule-time">{slot.startTime} - {slot.endTime}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {(hasOnlineOrFree || hasInPerson) && (
          <div className="schedule-notice">
            <h3 className="schedule-notice-title">مكان برگزاری جلسات</h3>

            {hasOnlineOrFree && (
              <div className="schedule-notice-item">
                <span className="schedule-notice-label">جلسات آنلاین:</span>
                <a href={onlineLink} className="schedule-notice-link">لینک میت گوگل</a>
              </div>
            )}
            {hasInPerson && (
              <div className="schedule-notice-item">
                <span className="schedule-notice-label">جلسات حضوری:</span>
                <span className="schedule-notice-value">{inPersonAddress}</span>
              </div>
            )}

          </div>
        )}
      </section>
    </div>
  )
}
