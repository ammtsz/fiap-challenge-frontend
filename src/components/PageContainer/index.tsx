interface PageContainerProps extends React.ComponentProps<'main'>{
  children: React.ReactNode;
};

export const PageContainer: React.FC<PageContainerProps> = ({ children, ...rest }) => {
  return (
    <main className="page-container" {...rest}>
      <div className="page">
        <>
          {children}
        </>
      </div>
    </main>
  )
}