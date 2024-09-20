import { Spinner } from '../Spinner';

interface LoadingProps extends React.ComponentProps<'div'> {
  className?: string;
  message?: string;
}

export const Loading: React.FC<LoadingProps> = ({
  className,
  message,
  ...rest
}) => {
  return (
    <div className={`text-center mt-[30vh] font-inter ${className}`} {...rest}>
      <Spinner />
      <h1 className='text-xl mt-4'>{message || 'Carregando...'}</h1>
    </div>
  );
};
