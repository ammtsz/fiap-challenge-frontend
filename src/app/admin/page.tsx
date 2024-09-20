'use client';

import {
  Divider,
  PageContainer,
  PageTitle,
  SearchBar,
  withAuth,
} from '@/components';
import { ROLES } from '@/enums/role';

const Admin = () => {
  return (
    <PageContainer>
      <PageTitle title='Administração de Postagens' />
      <Divider />
      <SearchBar className='block md:hidden' />
    </PageContainer>
  );
};

export default withAuth(Admin, [ROLES.ADMIN]);
