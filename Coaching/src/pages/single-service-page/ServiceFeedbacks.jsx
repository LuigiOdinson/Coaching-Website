import { useState, useContext } from 'react'
import { UserContext } from '../../providers/UserContext';

export default function ServiceFeedbacks({ serviceFeedbacks }) {

  const { user } = useContext(UserContext);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <div className="service-feedbacks">

      {(user && user.hasBoughtService) &&
        <div className="submit-feedback-section">
          <h3 className="submit-feedback-title">نظر خود را ثبت کنید</h3>
          <form className="submit-feedback-form">
            <textarea
              className="feedback-input"
              placeholder="نظر خود را بنویسید..."
              rows="3"
            ></textarea>

            <div className="feedback-submit-rating">
              {[1, 2, 3, 4, 5].map((starRating) => (
                <span
                  key={starRating}
                  className={`star ${starRating <= (hoverRating || rating) ? 'filled' : ''}`}
                  onMouseOver={() => setHoverRating(starRating)}
                  onMouseLeave={() => setHoverRating(0)}
                  onClick={() => setRating(starRating)}
                >★</span>
              ))}
            </div>

            <button className="button feedback-submit-button">
              <p>ارسال نظر</p>
            </button>
          </form>
        </div>
      }

      <div className="section-title">
        <p>نظرات</p>
      </div>

      <div className="feedbacks-list">
        {serviceFeedbacks.map((feedback) => {
          return (
            <div key={feedback.id} className="service-feedback-card">
              <div className="service-feedback-header">
                <span className="feedback-name">
                  <span>{feedback.firstName} </span>
                  <span>{feedback.lastName}</span>
                </span>

                <div className="feedback-rating">
                  {[1, 2, 3, 4, 5].map((starRating) => (
                    <span
                      key={starRating}
                      className={`star ${(starRating <= feedback.stars) ? 'filled' : ''}`}
                    >★</span>
                  ))}
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
