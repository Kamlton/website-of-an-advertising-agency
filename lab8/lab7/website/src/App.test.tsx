import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
import App from './App'

test('App рендерится', () => {
  const { container } = render(
    <MemoryRouter
      initialEntries={['/']}
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}
    >
      <App />
    </MemoryRouter>
  )
  
  const main = container.querySelector('main')
  expect(main).toBeInTheDocument()
})