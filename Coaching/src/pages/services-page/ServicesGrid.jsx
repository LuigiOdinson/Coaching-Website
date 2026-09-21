import React from 'react'
import { services } from '../../mock/services'

export default function ServicesGrid() {
  return (
    <div className="services-grid">
      {services.map((service) => {
        return (
          <div class="service-card">
            <div class="service-image"></div>
            <div class="service-body">
              <span class="service-tag">{service.type}</span>
              <h3 class="service-title">{service.title}</h3>
              <p class="service-desc">{service.description}</p>
              <p class="service-price">{service.price}<span> تومان</span></p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
