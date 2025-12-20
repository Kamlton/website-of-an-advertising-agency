import React from 'react'
import { Link } from 'react-router-dom'
import servicesData from '../../data/services.json'
import './Services.css'

interface Service {
  id: string
  title: string
  description: string
  price: number
}

const Services: React.FC = () => {
  const services: Service[] = servicesData

  return (
    <div className="services">
      <h1>Наши услуги</h1>
      <div className="services-grid">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <p className="price">от {service.price} руб.</p>
            <Link to={`/services/${service.id}`} className="details-link">
              Подробнее
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services