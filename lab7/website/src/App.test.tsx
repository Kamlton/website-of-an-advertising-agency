import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
import App from './App'

test('App рендерится', () => {
  render(
    <MemoryRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}
    >
      <App />
    </MemoryRouter>
  )
  
  expect(screen.getByRole('main')).toBeInTheDocument()
})