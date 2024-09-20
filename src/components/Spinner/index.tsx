interface SpinnerProps extends React.ComponentProps<'div'> {
  className?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({ className, ...props }) => {
  return (
    <div className={`flex items-center justify-center ${className}`} {...props}>
      <div className='animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary'></div>
    </div>
  );
};
