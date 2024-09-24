import React from 'react';

interface ErrorMessageProps {
  children: React.ReactNode;
  className?: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  children,
  className,
}) => {
  return (
    <span className={`text-sm text-red-500 mx-2 ${className}`}>{children}</span>
  );
};
