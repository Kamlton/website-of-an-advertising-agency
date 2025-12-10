import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom' 
import Header from '../Header/Header' 
import '@testing-library/jest-dom'

test('Header renders logo and navigation links', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  )
  
  expect(screen.getByText('AdPro')).toBeInTheDocument()
  expect(screen.getByText('Главная')).toBeInTheDocument()
  expect(screen.getByText('Услуги')).toBeInTheDocument()
})