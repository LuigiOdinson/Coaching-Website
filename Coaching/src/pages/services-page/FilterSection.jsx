import { useState } from 'react'

export default function FilterSection({filter, setFilter}) {

  return (
    <div className="filter-section">
      <p className="section-title">دوره‌ها و پادکست‌ها</p>
      
      <nav className="filter-tab">
        <button
          className={`service-filter-button ${filter === "all" ? 'is-active' : ''}`}
          onClick={() => { setFilter("all") }}>

          <svg className="tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <line x1="16.5" y1="16.5" x2="21" y2="21" />
          </svg>

          <span>همه</span>
        </button>

        <button
          className={`service-filter-button ${filter === "podcast" ? 'is-active' : ''}`}
          onClick={() => { setFilter("podcast") }}>

          <svg className="tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12a9 9 0 0 1 18 0a9 9 0 0 1-18 0z" />
            <circle cx="12" cy="12" r="3" />
          </svg>

          <span>پادکست</span>
        </button>

        <button
          className={`service-filter-button ${filter === "course" ? 'is-active' : ''}`}
          onClick={() => { setFilter("course") }}>

          <svg className="tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 5h7v14H4z" />
            <path d="M13 5h7v14h-7z" />
          </svg>

          <span>دوره</span>
        </button>
      </nav>
    </div>
  )
}
