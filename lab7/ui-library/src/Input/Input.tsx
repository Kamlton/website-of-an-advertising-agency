import React, { forwardRef } from 'react'
import styles from './Input.module.css'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  type?: 'text' | 'email' | 'tel' | 'textarea' | 'number'
  placeholder?: string
  label?: string
  error?: string
  rows?: number
  name?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  required?: boolean
  disabled?: boolean
}

const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
  (
    {
      type = 'text',
      placeholder,
      name,
      label,
      error,
      value,
      onChange,
      required = false,
      disabled = false,
      rows = 4,
      ...rest
    },
    ref
  ) => {
    const inputId = name || `input-${Math.random().toString(36).substr(2, 9)}`

    if (type === 'textarea') {
      const textareaProps = {
        id: inputId,
        name,
        ref: ref as React.ForwardedRef<HTMLTextAreaElement>,
        value,
        onChange,
        placeholder,
        className: `${styles.input} ${styles.textarea} ${error ? styles.error : ''}`,
        required,
        disabled,
        rows,
        ...rest
      }

      return (
        <div className={styles.inputWrapper}>
          {label && (
            <label htmlFor={inputId} className={styles.label}>
              {label}
              {required && <span className={styles.required}>*</span>}
            </label>
          )}
          <textarea {...textareaProps} />
          {error && <span className={styles.errorMessage}>{error}</span>}
        </div>
      )
    }

    const inputProps = {
      id: inputId,
      type,
      name,
      ref: ref as React.ForwardedRef<HTMLInputElement>,
      value,
      onChange,
      placeholder,
      className: `${styles.input} ${error ? styles.error : ''}`,
      required,
      disabled,
      ...rest
    }

    return (
      <div className={styles.inputWrapper}>
        {label && (
          <label htmlFor={inputId} className={styles.label}>
            {label}
            {required && <span className={styles.required}>*</span>}
          </label>
        )}
        <input {...inputProps} />
        {error && <span className={styles.errorMessage}>{error}</span>}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input