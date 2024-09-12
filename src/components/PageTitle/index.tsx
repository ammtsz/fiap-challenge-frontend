interface PageTitleProps extends React.ComponentProps<'h1'>{
  title: string;
};

export const PageTitle: React.FC<PageTitleProps> = ({ title, ...rest }) => {
  return (
    <h1
      className="font-bold text-4xl text-primary mb-6"
      {...rest}
    >
      {title}
    </h1>
  )
}