import { Divider, PageTitle, SearchBar } from "@/components";

const Admin = () => {
  return (
    <main className="page">
      <PageTitle title="Administração de Postagens"/>
      <Divider />
      <SearchBar className="block md:hidden"/>
    </main>
  )
};

export default Admin;