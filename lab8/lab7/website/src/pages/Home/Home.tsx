import React from 'react'
import { Link } from 'react-router-dom'
import TestimonialSlider from '../../components/TestimonialSlider/TestimonialSlider'
import SimpleForm from '../../components/SimpleForm/SimpleForm'
import servicesData from '../../data/services.json'
import './Home.css'
import '../Services/Services.css'

interface Service {
  id: string
  title: string
  description: string
  price: number
}

const Home: React.FC = () => {
  const keyServices: Service[] = (servicesData as Service[]).slice(0, 3)

  return (
    <div className="home">
      <section className="hero">
        <h1>Добро пожаловать в наше рекламное агентство</h1>
        <p>Мы создаем эффективные рекламные кампании для бизнеса любого масштаба</p>
        <Link to="/services" className="cta-button">
          Наши услуги
        </Link>
      </section>

      <section className="key-services">
        <h2>Ключевые услуги</h2>
        <div className="services-grid">
          {keyServices.map((service) => (
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
      </section>
      
      <section className="features">
        <h2>Почему выбирают нас</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Опыт</h3>
            <p>Более 10 лет на рынке рекламных услуг</p>
          </div>
          <div className="feature-card">
            <h3>Качество</h3>
            <p>Гарантируем высокое качество выполнения работ</p>
          </div>
          <div className="feature-card">
            <h3>Результат</h3>
            <p>Нацеленность на измеримые бизнес-результаты</p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <TestimonialSlider />
      </section>

      <section className="contact-section">
        <h2>Оставьте заявку</h2>
        <p>Заполните форму, и мы свяжемся с вами для обсуждения деталей проекта.</p>
        <SimpleForm />
      </section>
    </div>
  )
}

export default Home