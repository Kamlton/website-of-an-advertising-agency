import React from 'react'
import SimpleForm from '../../components/SimpleForm/SimpleForm'
import './Contacts.css'

const Contacts: React.FC = () => {
  return (
    <div className="contacts">
      <h1>Контакты</h1>
      
      <div className="contacts-content">
        <section className="contact-info">
          <h2>Наши контакты</h2>
          <div className="contact-item">
            <strong>Адрес:</strong>
            <p>г. Москва, ул. Примерная, д. 123</p>
          </div>
          <div className="contact-item">
            <strong>Телефон:</strong>
            <p>+7 (495) 123-45-67</p>
          </div>
          <div className="contact-item">
            <strong>Email:</strong>
            <p>info@agency.ru</p>
          </div>
          <div className="contact-item">
            <strong>Режим работы:</strong>
            <p>Пн-Пт: 9:00 - 18:00</p>
          </div>
        </section>
        
        <section className="contact-form">
          <h2>Свяжитесь с нами</h2>
          <SimpleForm />
        </section>
      </div>
    </div>
  )
}

export default Contacts