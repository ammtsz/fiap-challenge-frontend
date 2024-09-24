
interface InputRadioProps extends React.ComponentProps<'input'> {
  id: string;
  name: string;
  value: string;
  label: string;
}

export const InputRadio: React.FC<InputRadioProps> = ({
  id,
  name,
  value,
  label,
  ...props
}) => {
  return (
    <>
      <input type="radio" id={id} name={name} value={value} {...props}
      className="mx-2 accent-[#CD5600]"
      />
      <label htmlFor={id}>{label}</label>
    </>
  )
}