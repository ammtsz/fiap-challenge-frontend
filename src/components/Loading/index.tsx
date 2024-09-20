import { Spinner } from '../Spinner';

interface LoadingProps extends React.ComponentProps<'div'> {
  className?: string;
  message?: string;
}

export const Loading: React.FC<LoadingProps> = ({
  className,
  message,
  ...props
}) => {
  return (
    <div className={`text-center mt-[30vh] font-inter ${className}`} {...props}>
      <Spinner />
      <h1 className='text-xl mt-4'>{message || 'Carregando...'}</h1>
    </div>
  );
};
