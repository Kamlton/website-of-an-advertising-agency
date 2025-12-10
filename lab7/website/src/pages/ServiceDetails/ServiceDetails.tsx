import React from 'react'
import { useParams, Link } from 'react-router-dom'
import servicesData from '../../data/services.json'
import ServiceCalculator from '../../components/ServiceCalculator/ServiceCalculator'
import './ServiceDetails.css'

interface Service {
  id: string
  title: string
  description: string
  fullDescription: string
  price: number
  features: string[]
}

const ServiceDetails: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>()
  const services: Service[] = servicesData
  const service = services.find(s => s.id === serviceId)

  if (!service) {
    return (
      <div className="service-details">
        <h1>Услуга не найдена</h1>
        <Link to="/services">Вернуться к списку услуг</Link>
      </div>
    )
  }

  return (
    <div className="service-details">
      <nav className="breadcrumbs">
        <Link to="/">Главная</Link> &gt; 
        <Link to="/services">Услуги</Link> &gt; 
        <span>{service.title}</span>
      </nav>
      
      <h1>{service.title}</h1>
      <p className="description">{service.fullDescription}</p>
      
      <div className="features">
        <h3>Что входит в услугу:</h3>
        <ul>
          {service.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      
      <div className="price-section">
        <h3>Стоимость:</h3>
        <p className="price">от {service.price.toLocaleString()} руб.</p>
        <Link to="/contacts" className="order-button">
          Заказать услугу
        </Link>
      </div>

      <div className="calculator-section">
        <ServiceCalculator />
      </div>
    </div>
  )
}

export default ServiceDetails