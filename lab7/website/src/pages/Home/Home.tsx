import React from 'react'
import { Link } from 'react-router-dom'
import TestimonialSlider from '../../components/TestimonialSlider/TestimonialSlider'
import './Home.css'

const Home: React.FC = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>Добро пожаловать в наше рекламное агентство</h1>
        <p>Мы создаем эффективные рекламные кампании для бизнеса любого масштаба</p>
        <Link to="/services" className="cta-button">
          Наши услуги
        </Link>
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
    </div>
  )
}

export default Home