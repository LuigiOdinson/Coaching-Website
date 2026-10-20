import { Link } from 'react-router'
import { services } from '../../mock/services'
import formatCurrency from '../../helpers/formatCurrency';

export default function ServicesGrid({ filter }) {
  const far_service_type = {
    "course": "دوره",
    "podcast": "پادکست"
  }

  const filteredServices = (filter === "all")
    ? services
    : services.filter((service) => service.type === filter);

  return (
    <div className="services-grid">
      {filteredServices.map((service) => {
        return (
          // <Link to={`/services/${service.id}`}>
          <Link key={service.id} to={`/service`}>
            <div className="service-card">
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-body">
                <span className="service-tag">{far_service_type[service.type]}</span>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>
                <p className="service-price">{formatCurrency(service.price)}</p>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
