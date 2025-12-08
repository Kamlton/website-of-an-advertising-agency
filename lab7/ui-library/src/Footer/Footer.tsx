import React from 'react'
import styles from './Footer.module.css'

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p>&copy; 2024 Рекламное агентство. Все права защищены.</p>
        <p>г. Москва, ул. Примерная, д. 123 | +7 (495) 123-45-67</p>
      </div>
    </footer>
  )
}

export default Footer