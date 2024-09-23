import React from "react"

interface ErrorMessageProps {
  children: React.ReactNode
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ children }) => {
  return (
    <span className="text-sm text-red-500 mx-2">
      {children}
    </span>
  )
}