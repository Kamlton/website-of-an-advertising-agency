import React from 'react'
import './About.css'

const About: React.FC = () => {
  return (
    <div className="about">
      <h1>О нашем агентстве</h1>
      
      <section className="company-info">
        <h2>Наша история</h2>
        <p>
          Мы работаем на рынке рекламных услуг более 10 лет. 
          За это время мы реализовали сотни успешных проектов 
          для клиентов из различных отраслей бизнеса.
        </p>
      </section>
      
      <section className="team">
        <h2>Наша команда</h2>
        <p>
          В нашей команде работают профессионалы с многолетним опытом 
          в области маркетинга, дизайна и веб-разработки.
        </p>
      </section>
      
      <section className="values">
        <h2>Наши ценности</h2>
        <ul>
          <li>Качество и профессионализм</li>
          <li>Прозрачность и честность</li>
          <li>Ориентация на результат клиента</li>
          <li>Инновации и креативность</li>
        </ul>
      </section>
    </div>
  )
}

export default About