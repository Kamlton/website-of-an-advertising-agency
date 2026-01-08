import React, { useState } from 'react'
import { Card, Button } from '@my-app/ui-library'
import servicesData from '../../data/services.json'
import './ServiceCalculator.css'

interface Service {
  id: string
  title: string
  price: number
}

interface CalculatorResult {
  selectedServices: string[]
  totalPrice: number
}

const ServiceCalculator: React.FC = () => {
  const services: Service[] = servicesData
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [result, setResult] = useState<CalculatorResult | null>(null)

  const toggleService = (serviceId: string) => {
    setSelectedServices((prev) => {
      if (prev.includes(serviceId)) {
        return prev.filter((id) => id !== serviceId)
      } else {
        return [...prev, serviceId]
      }
    })
  }

  const calculateTotal = () => {
    const total = selectedServices.reduce((sum, serviceId) => {
      const service = services.find((s) => s.id === serviceId)
      return sum + (service?.price || 0)
    }, 0)

    setResult({
      selectedServices,
      totalPrice: total
    })
  }

  const resetCalculator = () => {
    setSelectedServices([])
    setResult(null)
  }

  return (
    <div className="service-calculator">
      <h2>Калькулятор стоимости услуг</h2>
      <p className="calculator-description">
        Выберите услуги, которые вас интересуют, и узнайте примерную стоимость
      </p>

      <div className="calculator-services">
        {services.map((service) => (
          <Card
            key={service.id}
            title={service.title}
            className={`service-option ${
              selectedServices.includes(service.id) ? 'selected' : ''
            }`}
            onClick={() => toggleService(service.id)}
          >
            <div className="service-option-content">
              <p className="service-price">от {service.price.toLocaleString()} руб.</p>
              <div className="service-checkbox">
                {selectedServices.includes(service.id) ? '✓' : ''}
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="calculator-actions">
        <Button
          variant="primary"
          onClick={calculateTotal}
          disabled={selectedServices.length === 0}
        >
          Рассчитать стоимость
        </Button>
        {selectedServices.length > 0 && (
          <Button variant="secondary" onClick={resetCalculator}>
            Сбросить
          </Button>
        )}
      </div>

      {result && (
        <div className="calculator-result">
          <h3>Результат расчета</h3>
          <div className="result-services">
            <p>Выбранные услуги:</p>
            <ul>
              {result.selectedServices.map((serviceId) => {
                const service = services.find((s) => s.id === serviceId)
                return (
                  <li key={serviceId}>
                    {service?.title} - от {service?.price.toLocaleString()} руб.
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="result-total">
            <strong>Итого: {result.totalPrice.toLocaleString()} руб.</strong>
          </div>
          <p className="result-note">
            * Это примерная стоимость. Точная цена рассчитывается индивидуально
            после консультации.
          </p>
        </div>
      )}
    </div>
  )
}

export default ServiceCalculator

