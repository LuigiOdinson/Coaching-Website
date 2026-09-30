import {useState, useEffect} from 'react'
import Slider from "react-slick";
import { feedbacks } from '../../mock/feedbacks';

// Helper to get the right number of slides based on width
function getSlidesToShow() {
  const width = window.innerWidth;
  if (width <= 600) return 1;
  if (width <= 900) return 2;
  return 3;
}

export default function Feedbacks() {

  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow());

  // resize listener
  useEffect(() => {
    const handleResize = () => setSlidesToShow(getSlidesToShow());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
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
              <div className="landingpage-feedback-card">
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
