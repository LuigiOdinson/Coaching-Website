import React from 'react'

export default function MyCourses({myCourses}) {
  console.log(myCourses);
  return (
    <div className="my-courses">
      <h2 className="section-title">دوره‌های من</h2>

      <div className="courses-grid">

        {myCourses.map((course) => (
          <div key={course.serviceId} className="profile-service-card">
            <div className="profile-service-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 5h9a3 3 0 0 1 3 3v11H7a3 3 0 0 1-3-3V5z" />
                <path d="M16 8h4v11h-4" />
              </svg>
            </div>
            <div className="profile-service-card-bottom-row">
              <h3 className="profile-service-card-title">{course.title}</h3>
              <button className="button profile-service-card-button">ادامه یادگیری</button>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}
