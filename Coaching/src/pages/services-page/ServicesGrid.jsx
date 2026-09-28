import { Link } from 'react-router'
import { services } from '../../mock/services'

export default function ServicesGrid({ filter }) {

  const filteredServices = (filter === "all")
    ? services
    : services.filter((service) => service.type === filter);

  return (
    <div className="services-grid">
      {filteredServices.map((service) => {
        return (
          // <Link to={`/services/${service.id}`}>
          <Link to={`/service`}>
            <div className="service-card">
              <div className="service-image"></div>
              <div className="service-body">
                <span className="service-tag">{service.typeFar}</span>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>
                <p className="service-price">{service.price}<span> تومان</span></p>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
