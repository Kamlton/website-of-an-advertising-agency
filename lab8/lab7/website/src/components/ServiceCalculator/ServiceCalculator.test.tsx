import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ServiceCalculator from './ServiceCalculator'

jest.mock('../../data/services.json', () => [
  { id: "1", title: "Дизайн", price: 10000 }
])

test('ServiceCalculator отображает заголовок', () => {
  render(<ServiceCalculator />)
  expect(screen.getByText('Калькулятор стоимости услуг')).toBeInTheDocument()
})