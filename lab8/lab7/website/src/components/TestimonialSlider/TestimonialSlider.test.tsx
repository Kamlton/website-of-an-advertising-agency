import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import TestimonialSlider from './TestimonialSlider'

jest.mock('../../data/testimonials.json', () => [
  {
    id: "1",
    author: "Иван Иванов",
    company: "Тест компания",
    text: "Отличная работа",
    rating: 5
  }
])

test('TestimonialSlider отображает отзыв', () => {
  render(<TestimonialSlider />)
  expect(screen.getByText('Отзывы наших клиентов')).toBeInTheDocument()
  expect(screen.getByText('"Отличная работа"')).toBeInTheDocument()
  expect(screen.getByText('Иван Иванов')).toBeInTheDocument()
})