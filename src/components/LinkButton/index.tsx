"use client"

import Link, { LinkProps } from 'next/link'

interface LinkButtonProps extends LinkProps {
  className?: string;
  variation?: 'primary' | 'secondary' | 'danger';
  children: React.ReactNode;
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  className,
  children,
  variation = 'primary',
  ...rest
}) => {
  return (
      <Link
        className={`${variation}_btn ${className}`}
        {...rest}
      >
        {children}
      </Link>
  )
};