import { render, screen } from '@testing-library/react'
import Modal from '../Modal'

test('Modal renders when isOpen is true', () => {
  render(
    <Modal isOpen={true} onClose={() => {}}>
      <p>Modal content</p>
    </Modal>
  )
  expect(screen.getByText('Modal content')).toBeInTheDocument()
})

test('Modal renders title when provided', () => {
  render(
    <Modal isOpen={true} onClose={() => {}} title="Test Modal">
      <p>Content</p>
    </Modal>
  )
  expect(screen.getByText('Test Modal')).toBeInTheDocument()
})