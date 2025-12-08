import { render, screen } from '@testing-library/react'
import Input from '../Input'

test('Input renders with label', () => {
  render(<Input label="Email" />)
  expect(screen.getByLabelText('Email')).toBeInTheDocument()
})

test('Textarea renders when type is textarea', () => {
  render(<Input type="textarea" />)
  expect(screen.getByRole('textbox')).toBeInTheDocument()
})

test('Input shows error message', () => {
  render(<Input error="Required field" />)
  expect(screen.getByText('Required field')).toBeInTheDocument()
})