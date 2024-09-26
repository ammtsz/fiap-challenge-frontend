import { Label } from '@/components';

interface TextAreaProps extends React.ComponentProps<'textarea'> {
  id: string;
  className?: string;
  label?: {
    text: string;
    variation?: 'primary' | 'default';
  };
  placeholder?: string;
  hasError?: boolean;
}

export const TextArea: React.FC<TextAreaProps> = ({
  id,
  className,
  label,
  placeholder,
  value,
  hasError,
  ...props
}) => {
  return (
    <div className={`flex flex-col w-full ${className}`}>
      {label && (
        <Label variation={label.variation || 'default'}>{label.text}</Label>
      )}
      <textarea
        id={id}
        name={id}
        className={`p-2 ${hasError ? 'input_error' : 'input'}`}
        placeholder={placeholder}
        value={value}
        {...props}
      />
    </div>
  );
};
