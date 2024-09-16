interface InputProps extends React.ComponentProps<"input"> {
  className?: string;
  label?: string;
  type?: string;
  id: string;
  placeholder?: string;
  handleChange?: (e: string) => void;
}

export const Input: React.FC<InputProps> = ({
  id,
  type,
  className,
  label,
  placeholder,
  value,
  handleChange,
  ...rest
}) => {
  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    handleChange && handleChange(e.target.value);
  };

  return (
    <div className={`flex flex-col ${className}`}>
      {label && (
        <label className="mb-1" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        id={id}
        name={id}
        type={type}
        className="input"
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
        {...rest}
      />
    </div>
  );
};
