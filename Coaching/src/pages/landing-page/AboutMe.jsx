import React from 'react'

export default function AboutMe() {
  return (
    <section className="about-me-section">

      <div className="about-me-content">
        <div className="about-me-keywords">
          <h2>درباره من</h2>
          <p>
            من همسفر شما هستم. همسفر شما در مسیر رشد و تعالی. باور دارم هر انسانی پتانسیل بی‌نهایتی برای ساختن زندگی دلخواهش دارد.
          </p>
        </div>

        <div className="button about-me-button">
          <p>درباره من</p>
        </div>
      </div>

      <div className="about-me-image">
        <img src="/images/about-me-image.jpg" alt="" />
      </div>
    </section>
  )
}
