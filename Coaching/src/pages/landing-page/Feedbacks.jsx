import React from 'react'
import Slider from "react-slick";
import { feedbacks } from '../../mock/feedbacks';

export default function Feedbacks() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section className="feedbacks-section">

      <div className="section-title">
        <p>نظرات</p>
      </div>

      <div className="feedbacks-container">
        <Slider {...settings}>
        {feedbacks.map((feedback) => {
          return (
            <div>
              <div className="feedback-card">
                <p>
                  {feedback.feedbackText}
                </p>
                <h3>{feedback.userName}</h3>
              </div>
            </div>
          )
        })}
      </Slider>
      </div>

    </section>

  );
}
