import React from 'react'
import './ServicesPage.css'

export default function CoachingCard() {
  return (
    <div className="coaching-card">
      <div className="section-title">
        <p>سرویس‌ها</p>
      </div>

      <div class="coaching-feature">
        <div class="coaching-feature-image">
          <img  alt='image' />
        </div>
        <div class="coaching-feature-body">
          <h3>کوچینگ فردی</h3>
          <p>
            جلسات یک‌به‌یک برای پیدا کردن مسیر، غلبه بر موانع و رسیدن به اهداف.
            زمان جلسه را خودتان انتخاب می‌کنید.
          </p>
          <button class="reserve-coaching-button">
            <p>رزرو جلسه</p>
          </button>
        </div>
      </div>
    </div>
  )
}
