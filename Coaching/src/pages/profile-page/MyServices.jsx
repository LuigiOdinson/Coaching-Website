import React from 'react'
import useLoadNumber from '../../hooks/useLoadNumber'

export default function MyServices({myServices, type}) {

  const isCourse = (type === "course");
  const {loadNumber, toggle} = useLoadNumber(4, myServices.length);

  return (
    <div className="my-services">
      <h2 className="section-title">
        {isCourse
          ? <p>دوره‌های من</p>
          : <p>پادکست‌های من</p>
        }
      </h2>

      {myServices.length === 0 &&
        <div className='section-title' style={{"font-weight": "300", "font-size": "16px"}}>
          {isCourse
            ? <p>شما دوره‌ای ندارید</p>
            : <p>شما پادکستی ندارید</p>
          }
        </div>
      }

      <div className="my-services-grid">

        {myServices.slice(0, loadNumber).map((service) => (
          <div key={service.serviceId} className="profile-service-card">
            <div className="profile-service-card-icon">
              {isCourse
                ?
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 5h9a3 3 0 0 1 3 3v11H7a3 3 0 0 1-3-3V5z" />
                  <path d="M16 8h4v11h-4" />
                </svg>
                :
                <svg viewBox="0 0 100 100" width="100%" height="100%">
                  <g fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 55 V35 C20 18.4 33.4 5 50 5 C66.6 5 80 18.4 80 35 V55" />
                    <path d="M20 49 H27.5 C30.5 49 33 51.5 33 54.5 V73.5 C33 76.5 30.5 79 27.5 79 H25.5 C22.5 79 20 76.5 20 73.5 Z" />
                    <path d="M80 49 H72.5 C69.5 49 67 51.5 67 54.5 V73.5 C67 76.5 69.5 79 72.5 79 H74.5 C77.5 79 80 76.5 80 73.5 Z" />
                  </g>
                </svg>
              }
            </div>

            <div className="profile-service-card-bottom-row">
              <h3 className="profile-service-card-title">{service.title}</h3>
              <button className="button profile-service-card-button">ادامه یادگیری</button>
            </div>
          </div>
        ))}

      </div>

      {loadNumber === 4 && myServices.length > 4 &&
        <button onClick={toggle} className="show-more">
          <p>بیشتر</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32">
            <title>chevron-down</title><path fill="currentColor" d="M16 22L6 12l1.4-1.4l8.6 8.6l8.6-8.6L26 12z" />
          </svg>
        </button>
      }

      {loadNumber > 4 &&
        <button onClick={toggle} className="show-more">
          <p>کمتر</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32">
            <title>chevron-up</title><path fill="currentColor" d="m16 10l10 10l-1.4 1.4l-8.6-8.6l-8.6 8.6L6 20z" />
          </svg>
        </button>
      }

    </div>
  )
}
