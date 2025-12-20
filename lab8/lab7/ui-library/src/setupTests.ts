import '@testing-library/jest-dom'

const originalWarn = console.warn

beforeAll(() => {
  console.warn = jest.fn()
})

afterAll(() => {
  console.warn = originalWarn
})