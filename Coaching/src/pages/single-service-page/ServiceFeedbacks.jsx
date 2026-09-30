import React from 'react'

export default function ServiceFeedbacks({ serviceFeedbacks }) {
  return (
    <div className="service-feedbacks">
      <div className="section-title">
        <p>نظرات</p>
      </div>

      <div className="feedbacks-list">
        {serviceFeedbacks.map((feedback) => {
          return (
            <div key={feedback.id} className="service-feedback-card">
              <div className="service-feedback-header">
                <span className="feedback-name">
                  <span>{feedback.firstName}</span>
                  <span>{feedback.lastName}</span>
                </span>
                <div className="feedback-stars" aria-label="5 out of 5 stars">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
              </div>
              <p className="feedback-text">
                {feedback.feedbackText}
              </p>
            </div>
          )
        })}
      </div>

    </div>
  )
}
