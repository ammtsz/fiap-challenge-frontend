'use client'
import React from 'react'

interface SpanProps extends React.ComponentProps<'span'> {
  className?: string
}

export const Span: React.FC<SpanProps> = ({ children, className, ...props }) => {
  return (
    <span className={className} {...props}>
      {children}
    </span>
  )
}
export default Span