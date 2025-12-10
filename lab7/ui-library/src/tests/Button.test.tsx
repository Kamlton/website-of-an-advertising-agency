import { render, screen } from '@testing-library/react'
import Button from '../Button' 
import '@testing-library/jest-dom'

test('Button renders with children', () => {
  render(<Button>Click me</Button>)
  expect(screen.getByText('Click me')).toBeInTheDocument()
})

test('Button can be disabled', () => {
  render(<Button disabled>Disabled</Button>)
  expect(screen.getByText('Disabled')).toBeDisabled()
})