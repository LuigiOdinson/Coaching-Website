import React from 'react'
import './ServicesPage.css'

export default function CoachingCard() {
  return (
    <div className="coaching-card">
      <div className="section-title">
        <p>سرویس‌ها</p>
      </div>

      <div className="coaching-feature">
        <div className="coaching-feature-image">
          <img src="../../../public/images/coaching-picture.jfif" alt="" />
        </div>
        <div className="coaching-feature-body">
          <h3>کوچینگ فردی</h3>
          <p>
            جلسات یک‌به‌یک برای پیدا کردن مسیر، غلبه بر موانع و رسیدن به اهداف.
            زمان جلسه را خودتان انتخاب می‌کنید.
          </p>
          <a className="button reserve-coaching-button" href="/booking">رزرو جلسه</a>
        </div>
      </div>
    </div>
  )
}
