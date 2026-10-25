import React from 'react'
import { coaching } from '../../mock/coaching'
import formatCurrency from '../../helpers/formatCurrency'

export default function OptionsSection({selectedOption, setSelectedOption}) {
  const far_session_type_tag = {
    "online": "آنلاین",
    "inPerson": "حضوری",
    "freeSession": "رایگان"
  }

  return (
    <div className="options-section">
      <h2 className="section-title">لطفا نوع مشاوره را انتخاب کنید</h2>

      <div className="options">
        {coaching.sessionTypes.map((sessionType) => (
          <label key={sessionType.id} className="option">
            <div className="option-info">
              <span className="option-title">{far_session_type_tag[sessionType.type]}</span>
              <span className="option-sub">جلسه <span>{sessionType.durationMins}</span> دقیقه‌ای</span>
            </div>

            <div className="option-left">
              {sessionType.type !== 'freeSession' &&
                <span className="option-price">{formatCurrency(sessionType.pricePerSession)} هر جلسه</span>
              }
              <input 
                type="radio" 
                name="type" 
                className="radio"
                checked={selectedOption?.id === sessionType.id}
                onChange={() => setSelectedOption(sessionType)}
               />
            </div>
          </label>
        ))}
      </div>
    </div>
  )
}
