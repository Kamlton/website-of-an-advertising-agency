import { render, screen } from '@testing-library/react'
import Footer from '../Footer'

test('Footer renders copyright text', () => {
  render(<Footer />)
  expect(screen.getByText(/© 2024 Рекламное агентство/i)).toBeInTheDocument()
})