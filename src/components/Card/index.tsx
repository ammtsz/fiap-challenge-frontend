'use client';
import React from 'react';
interface CardProps extends React.ComponentProps<'div'> {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ className, children }) => {
  return (
    <div
      className={`w-full mx-auto p-6 bg-secondary border border-primary rounded-lg flex items-center justify-center ${className}`}
    >
      {children}
    </div>
  );
};
