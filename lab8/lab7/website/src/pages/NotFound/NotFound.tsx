import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'

const NotFound: React.FC = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Страница не найдена</h2>
      <p>К сожалению, запрашиваемая страница не существует.</p>
      <p>Попробуйте обновить страницу или вернуться на главную.</p>
      <Link to="/" className="home-link">
        Вернуться на главную
      </Link>
    </div>
  )
}

export default NotFound

