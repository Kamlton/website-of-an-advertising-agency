import React from 'react'
import styles from './Card.module.css'

interface CardProps {
  children: React.ReactNode
  title?: string
  imageUrl?: string
  className?: string
  onClick?: () => void
}

const Card: React.FC<CardProps> = ({
  children,
  title,
  imageUrl,
  className = '',
  onClick
}) => {
  return (
    <div
      className={`${styles.card} ${className} ${onClick ? styles.clickable : ''}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {imageUrl && (
        <div className={styles.imageContainer}>
          <img src={imageUrl} alt={title || 'Card image'} className={styles.image} />
        </div>
      )}
      {title && <h3 className={styles.title}>{title}</h3>}
      <div className={styles.content}>{children}</div>
    </div>
  )
}

export default Card

