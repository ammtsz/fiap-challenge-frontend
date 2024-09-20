'use client';

interface ButtonProps extends React.ComponentProps<'button'> {
  onClick?: () => void;
  className?: string;
  variation?: 'primary' | 'secondary' | 'tertiary' | 'danger';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  className,
  children,
  variation = 'primary',
  ...props
}) => {
  const handleClick = () => {
    onClick && onClick();
  };

  return (
    <button
      onClick={handleClick}
      className={`${variation}_btn ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
