import { useEffect, useState } from 'react'
import useLoadNumber from '../../hooks/useLoadNumber';

export default function ServiceContent({ serviceData }) {
  var items = serviceData.type === 'course'
    ? serviceData.lessons
    : serviceData.episodes;

  const {loadNumber, toggle} = useLoadNumber(3, items.length);

  return (
    <section className="lessons-section">
      <h2>
        {serviceData.type === 'course'
          ? 'جلسات دوره'
          : 'اپیزودهای پادکست'
        }
      </h2>

      <div className="lessons-list">
        {items.slice(0, loadNumber).map((item) => {
          return (
            <div className="lesson-card" key={item.id}>

              <div className="lesson-number">
                <p>
                  {String(item.id).padStart(2, "0")}
                </p>
              </div>

              <div className="lesson-content">
                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>

            </div>
          )
        })}
      </div>

      {loadNumber === 3 && items.length > 3 &&
        <button onClick={toggle} className="show-more">
          <p>بیشتر</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32">
            <title>chevron-down</title><path fill="currentColor" d="M16 22L6 12l1.4-1.4l8.6 8.6l8.6-8.6L26 12z" />
          </svg>
        </button>
      }

      {loadNumber > 3 &&
        <button onClick={toggle} className="show-more">
          <p>کمتر</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32">
            <title>chevron-up</title><path fill="currentColor" d="m16 10l10 10l-1.4 1.4l-8.6-8.6l-8.6 8.6L6 20z" />
          </svg>
        </button>
      }

    </section>
  )
}
