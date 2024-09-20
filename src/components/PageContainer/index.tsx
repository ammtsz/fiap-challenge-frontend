interface PageContainerProps extends React.ComponentProps<'main'> {
  children: React.ReactNode;
}

export const PageContainer: React.FC<PageContainerProps> = ({
  children,
  ...props
}) => {
  return (
    <main className='page-container' {...props}>
      <div className='page'>
        <>{children}</>
      </div>
    </main>
  );
};
