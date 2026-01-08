import '@testing-library/jest-dom'

// Сохраняем оригинальный console.warn
const originalWarn = console.warn

// Мокаем только для тестов
beforeAll(() => {
  console.warn = jest.fn()
})

// Восстанавливаем после тестов
afterAll(() => {
  console.warn = originalWarn
})