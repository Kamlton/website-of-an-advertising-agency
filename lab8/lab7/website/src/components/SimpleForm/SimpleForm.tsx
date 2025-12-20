import React from 'react'
import { useForm } from 'react-hook-form'
import { Input, Button } from '@my-app/ui-library'
import './SimpleForm.css'

interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

const SimpleForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    const stored = localStorage.getItem('agencyRequests')
    const existing: FormData[] = stored ? JSON.parse(stored) : []

    const requestData = {
      ...data,
      createdAt: new Date().toISOString()
    }

    localStorage.setItem(
      'agencyRequests',
      JSON.stringify([...existing, requestData])
    )

    alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.')
    reset()
  }

  return (
    <form className="simple-form" onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        label="Имя"
        placeholder="Введите ваше имя"
        {...register('name', {
          required: 'Имя обязательно для заполнения',
          minLength: {
            value: 2,
            message: 'Имя должно содержать минимум 2 символа'
          }
        })}
        error={errors.name?.message}
        required
      />

      <Input
        type="email"
        label="Email"
        placeholder="example@mail.com"
        {...register('email', {
          required: 'Email обязателен для заполнения',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Некорректный email адрес'
          }
        })}
        error={errors.email?.message}
        required
      />

      <Input
        type="tel"
        label="Телефон"
        placeholder="+7 (999) 123-45-67"
        {...register('phone', {
          required: 'Телефон обязателен для заполнения',
          pattern: {
            value: /^[\d\s()+-]+$/,
            message: 'Некорректный номер телефона'
          }
        })}
        error={errors.phone?.message}
        required
      />

      <Input
        type="textarea"
        label="Сообщение"
        placeholder="Введите ваше сообщение"
        rows={5}
        {...register('message', {
          required: 'Сообщение обязательно для заполнения',
          minLength: {
            value: 10,
            message: 'Сообщение должно содержать минимум 10 символов'
          }
        })}
        error={errors.message?.message}
        required
      />

      <Button type="submit" variant="primary">
        Отправить сообщение
      </Button>
    </form>
  )
}

export default SimpleForm

