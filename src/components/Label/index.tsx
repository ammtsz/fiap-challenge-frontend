interface LabelProps extends React.ComponentProps<'label'> {
  children: string;
  id?: string;
  className?: string;
  variation?: 'default' | 'primary';
}

export const Label: React.FC<LabelProps> = ({
  id,
  className,
  children,
  variation = 'default',
  ...props
}) => {
  return (
    <label
      className={`mb-1 ${
        variation === 'primary' && 'font-bold text-primary'
      } ${className}`}
      htmlFor={id}
      {...props}
    >
      {children}
    </label>
  );
};
