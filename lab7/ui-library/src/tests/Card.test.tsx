import { render, screen } from '@testing-library/react'
import Card from '../Card'

test('Card renders with title and children', () => {
  render(
    <Card title="Test Card">
      <p>Card content</p>
    </Card>
  )
  expect(screen.getByText('Test Card')).toBeInTheDocument()
  expect(screen.getByText('Card content')).toBeInTheDocument()
})

test('Card renders image when provided', () => {
  render(
    <Card title="Image Card" imageUrl="test.jpg">
      <p>Content</p>
    </Card>
  )
  expect(screen.getByAltText('Image Card')).toBeInTheDocument()
})