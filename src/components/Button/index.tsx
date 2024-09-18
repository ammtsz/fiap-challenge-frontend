'use client';

interface ButtonProps extends React.ComponentProps<'button'> {
  handleClick?: () => void;
  className?: string;
  variation?: 'primary' | 'secondary' | 'danger';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  handleClick,
  className,
  children,
  variation = 'primary',
  ...rest
}) => {
  const onClick = () => {
    handleClick && handleClick();
  };

  return (
    <button
      onClick={onClick}
      className={`${variation}_btn ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};
