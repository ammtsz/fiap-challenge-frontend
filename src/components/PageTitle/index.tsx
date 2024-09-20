interface PageTitleProps extends React.ComponentProps<'h1'> {
  title: string;
}

export const PageTitle: React.FC<PageTitleProps> = ({ title, ...props }) => {
  return (
    <h1 className='font-bold text-4xl text-primary mb-6' {...props}>
      {title}
    </h1>
  );
};
