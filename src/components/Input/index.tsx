import { Label } from '@/components';

interface InputProps extends React.ComponentProps<'input'> {
  className?: string;
  label?: {
    text: string;
    variation?: 'primary' | 'default';
  };
  type?: string;
  id: string;
  placeholder?: string;
  hasError?: boolean;
}

export const Input: React.FC<InputProps> = ({
  id,
  type,
  className,
  label,
  placeholder,
  value,
  hasError,
  ...props
}) => {
  return (
    <div className={`flex flex-col w-full ${className}`}>
      {label && <Label variation={label.variation}>{label.text}</Label>}
      <input
        id={id}
        name={id}
        type={type}
        className={hasError ? 'input_error' : 'input'}
        placeholder={placeholder}
        value={value}
        {...props}
      />
    </div>
  );
};
