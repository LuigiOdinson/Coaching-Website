import formatCurrency from '../../helpers/formatCurrency'

export default function ServiceDetails({serviceData}) {
  return (
    <section className="service-details">

      <div className="course-image">
        <img src={serviceData.image} alt={serviceData.title} />
      </div>

      <div className="course-info">

        <h1>{serviceData.title}</h1>

        {serviceData.type === 'course' &&
          <span className="course-description-title">
            توضیحات دوره
          </span>
        }
        {serviceData.type === 'podcast' &&
          <span className="course-description-title">
            توضیحات پادکست
          </span>
        }

        <p className="course-description">
          {serviceData.description}
        </p>

        <div className="course-stats">

          {serviceData.type === 'course' &&
            <div className="course-stat">
              <div className="stat-icon-container">
                <svg className='stat-icon' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                  <title>clock</title><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0"/><path d="M12 7v5l3 3"/></g>
                </svg>
              </div>

              <div className="stat-info">
                <span>مدت دوره</span>
                <span className="stat-info-value">{Math.floor(serviceData.durationMins / 60)} ساعت</span>
              </div>
            </div>
          }

          <div className="course-stat">
            <div className="stat-icon-container">
              <svg className='stat-icon' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
                <title>money</title>
                <path fill="currentColor" d="M128 88a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24m112-96H16a8 8 0 0 0-8 8v128a8 8 0 0 0 8 8h224a8 8 0 0 0 8-8V64a8 8 0 0 0-8-8m-46.35 128H62.35A56.78 56.78 0 0 0 24 145.65v-35.3A56.78 56.78 0 0 0 62.35 72h131.3A56.78 56.78 0 0 0 232 110.35v35.3A56.78 56.78 0 0 0 193.65 184M232 93.37A40.8 40.8 0 0 1 210.63 72H232ZM45.37 72A40.8 40.8 0 0 1 24 93.37V72ZM24 162.63A40.8 40.8 0 0 1 45.37 184H24ZM210.63 184A40.8 40.8 0 0 1 232 162.63V184Z"/>
              </svg>
            </div>

            <div className="stat-info">
              <span>قیمت</span>
              <span className="stat-info-value">{formatCurrency(serviceData.price, false)}</span>
            </div>
          </div>

          <div className="course-stat">
            <div className="stat-icon-container">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <title>book</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 20.25c0 .414.336.75.75.75h10.652C17.565 21 18 20.635 18 19.4v-1.445M5 20.25A2.25 2.25 0 0 1 7.25 18h10.152q.339 0 .598-.045M5 20.25V6.2c0-1.136-.072-2.389 1.092-2.982C6.52 3 7.08 3 8.2 3h9.2c1.236 0 1.6.437 1.6 1.6v11.8c0 .995-.282 1.425-1 1.555"/>
              </svg>
            </div>

            {serviceData.type === 'course' &&
              <div className="stat-info">
                <span>تعداد جلسات</span>
                <span className="stat-info-value">{serviceData.lessonsCount}</span>
              </div>
            }
            {serviceData.type === 'podcast' &&
              <div className="stat-info">
                <span>تعداد اپیزود</span>
                <span className="stat-info-value">{serviceData.episodesCount}</span>
              </div>
            }
          </div>

        </div>

        <button className="button enroll-button">خرید</button>

      </div>
    </section>
  )
}
