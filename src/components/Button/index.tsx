"use client"

interface ButtonProps {
  handleClick: () => void;
  className?: string;
  children: React.ReactNode;
  variation?: 'primary' | 'secondary' | 'danger';
}

export const Button: React.FC<ButtonProps> = ({
  handleClick,
  className,
  children,
  variation = 'primary',
  ...rest
}) => {

  const onClick = () => handleClick();
  return (
      <button
        onClick={onClick}
        className={`${variation}_btn ${className}`}
        {...rest}
      >
        {children}
      </button>
  )
};