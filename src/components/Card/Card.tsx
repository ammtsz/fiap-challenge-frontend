'use client'
import React from 'react'

interface InputField {
  id: string
  label: string
  type: string
  placeholder: string
}

interface ButtonProps extends React.ComponentProps<'button'> {
  handleClick: () => void
  className?: string
  variation?: 'primary' | 'secondary' | 'danger'
  children: React.ReactNode
}

interface CardProps {
  fields: InputField[]
  spans: SpanField[]
  ButtonComponent: React.FC<ButtonProps>
}

interface SpanField {
  id: string
  text: string
  className?: string
  href?: string
}
export const Card: React.FC<CardProps> = ({
  fields,
  spans,
  ButtonComponent,
}) => {
  return (
    <div className='container mx-auto p-4 bg-secondary border border-primary rounded-lg h-[500px] w-[1000px] flex items-center justify-center'>
      <form className='space-y-4 w-full max-w-md'>
        {fields.map((field) => (
          <div key={field.id}>
            <label
              htmlFor={field.id}
              className='block text-sm font-medium text-black'
            >
              {field.label}
            </label>
            <input
              type={field.type}
              id={field.id}
              name={field.id}
              className='mt-1 block w-full p-2 border border-primary rounded-md shadow-sm focus:ring-primary focus:border-primary'
              placeholder={field.placeholder}
            />
          </div>
        ))}
        <div>
          <ButtonComponent
            {...{
              handleClick: () => {},
              className: 'bg-primary text-white w-full p-2 rounded-md',
              children: 'Entrar',
            }}
          />
          {spans.map((span) => (
            <span
              key={span.id}
              className={`block text-center ${span.className}`}
            >
              {span.href ? (
                <a href={span.href} className='text-blue-500 underline'>
                  {span.text}
                </a>
              ) : (
                span.text
              )}
            </span>
          ))}
        </div>
      </form>
    </div>
  )
}
