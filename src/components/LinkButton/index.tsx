"use client"

import Link, { LinkProps } from 'next/link'

interface LinkButtonProps extends LinkProps {
  handleClick: () => void;
  className?: string;
  variation?: 'primary' | 'secondary' | 'danger';
  children: React.ReactNode;
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  handleClick,
  className,
  children,
  variation = 'primary',
  ...rest
}) => {

  const onClick = () => handleClick();
  return (
      <Link
        onClick={onClick}
        className={`${variation}_btn ${className}`}
        {...rest}
      >
        {children}
      </Link>
  )
};