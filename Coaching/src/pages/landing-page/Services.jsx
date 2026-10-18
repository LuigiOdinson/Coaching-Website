import React from 'react'
import { Link } from 'react-router'

export default function Services() {
  return (
    <section className="services-section">

      <div className="section-title">
        <p>سرویس‌ها</p>
      </div>

      <div className="service-cards-container">

          <div className="service-card-landing">
            <Link to={'/services'} className="card-image">
              <img src="../../../public/images/podcast-picture.jfif" alt="podcast-picture" />
            </Link>

            <p>پادکست</p>
          </div>

          <div className="service-card-landing">
            <Link to={'/services'} className="card-image">
              <img src="../../../public/images/course-picture.jfif" alt="course-picture" />
            </Link>

            <p>دوره آنلاین</p>
          </div>

          <div className="service-card-landing">
            <Link to={'/services'} className="card-image">
              <img src="../../../public/images/coaching-picture.jfif" alt="coaching-picture" />
            </Link>

            <p>کوچینگ</p>
          </div>

        </div>

    </section>
  )
}
