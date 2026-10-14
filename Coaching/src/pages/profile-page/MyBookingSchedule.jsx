import React from 'react'

export default function MyBookingSchedule() {
  return (
    <div className="my-booking-schedule">
      <section class="schedule-section">
        <h2 class="section-title">برنامه جلسات کوچینگ</h2>

        <div class="schedule-grid">

          <div class="schedule-card">
            <div class="schedule-card-header">
              <span class="schedule-date">۳۰ شهریور ۱۴۰۵</span>
            </div>
            <div class="schedule-card-body">
              <div class="schedule-row">
                <span class="tag tag-blue">آنلاین</span>
                <span class="schedule-time">۰۸:۰۰ - ۰۸:۵۵</span>
              </div>
              <div class="schedule-row">
                <span class="tag tag-blue">آنلاین</span>
                <span class="schedule-time">۰۸:۰۰ - ۰۸:۵۵</span>
              </div>
            </div>
          </div>

          <div class="schedule-card">
            <div class="schedule-card-header">
              <span class="schedule-date">۳۰ شهریور ۱۴۰۵</span>
            </div>
            <div class="schedule-card-body">
              <div class="schedule-row">
                <span class="tag tag-blue">آنلاین</span>
                <span class="schedule-time">۰۸:۰۰ - ۰۸:۵۵</span>
              </div>
              <div class="schedule-row">
                <span class="tag tag-green">حضوری</span>
                <span class="schedule-time">۰۸:۰۰ - ۰۸:۵۵</span>
              </div>
            </div>
          </div>

          <div class="schedule-card">
            <div class="schedule-card-header">
              <span class="schedule-date">۳۰ شهریور ۱۴۰۵</span>
            </div>
            <div class="schedule-card-body">
              <div class="schedule-row">
                <span class="tag tag-yellow">رایگان</span>
                <span class="schedule-time">۰۸:۰۰ - ۰۸:۵۵</span>
              </div>
              <div class="schedule-row">
                <span class="tag tag-green">حضوری</span>
                <span class="schedule-time">۰۸:۰۰ - ۰۸:۵۵</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
