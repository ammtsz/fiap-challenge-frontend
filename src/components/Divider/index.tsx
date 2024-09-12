interface DividerProps extends React.ComponentProps<'div'>{};

export const Divider: React.FC<DividerProps> = ({ ...rest }) => {
  return <div className="w-full min-h-[1px] bg-primary mb-8" {...rest}/>
}