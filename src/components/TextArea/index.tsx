import { Label } from '@/components';

interface TextAreaProps extends React.ComponentProps<'textarea'> {
  id: string;
  className?: string;
  label?: {
    text: string;
    variation?: 'primary' | 'default';
  };
  placeholder?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({
  id,
  className,
  label,
  placeholder,
  value,
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
        className='input p-2'
        placeholder={placeholder}
        value={value}
        {...props}
      />
    </div>
  );
};
