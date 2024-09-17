'use client'
import React from 'react'
interface CardProps extends React.ComponentProps<'div'> {
  children: React.ReactNode
}

export const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className='container mx-auto p-4 bg-secondary border border-primary rounded-lg h-[500px] w-[1000px] flex items-center justify-center'>
      {children}
    </div>
  )
}
