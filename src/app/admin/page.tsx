import { Divider, PageContainer, PageTitle, SearchBar } from "@/components";

const Admin = () => {
  return (
    <PageContainer>
      <PageTitle title="Administração de Postagens"/>
      <Divider />
      <SearchBar className="block md:hidden"/>
    </PageContainer>
  )
};

export default Admin;