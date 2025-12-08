import React, { useState, useEffect } from 'react'
import testimonialsData from '../../data/testimonials.json'
import './TestimonialSlider.css'

interface Testimonial {
  id: string
  author: string
  company: string
  text: string
  rating: number
}

const TestimonialSlider: React.FC = () => {
  const testimonials: Testimonial[] = testimonialsData
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying || testimonials.length === 0) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  if (testimonials.length === 0) {
    return (
      <div className="testimonial-slider">
        <p>Отзывы пока отсутствуют</p>
      </div>
    )
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className="testimonial-slider">
      <h2>Отзывы наших клиентов</h2>
      <div className="slider-container">
        <button
          className="slider-arrow slider-arrow-prev"
          onClick={prevSlide}
          aria-label="Предыдущий отзыв"
        >
          ‹
        </button>

        <div className="testimonial-card">
          <div className="testimonial-rating">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={`star ${i < currentTestimonial.rating ? 'filled' : ''}`}
              >
                ★
              </span>
            ))}
          </div>
          <p className="testimonial-text">"{currentTestimonial.text}"</p>
          <div className="testimonial-author">
            <strong>{currentTestimonial.author}</strong>
            <span className="testimonial-company">{currentTestimonial.company}</span>
          </div>
        </div>

        <button
          className="slider-arrow slider-arrow-next"
          onClick={nextSlide}
          aria-label="Следующий отзыв"
        >
          ›
        </button>
      </div>
      
    </div>
  )
}

export default TestimonialSlider

