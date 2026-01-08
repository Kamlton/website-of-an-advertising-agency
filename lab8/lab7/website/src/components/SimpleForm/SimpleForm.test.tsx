import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import SimpleForm from './SimpleForm'

test('SimpleForm отображает форму', () => {
  render(<SimpleForm />)
  const form = screen.getByRole('button', { name: /отправить сообщение/i }).closest('form')
  expect(form).toBeInTheDocument()
})