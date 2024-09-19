'use client';

import { Divider, PageContainer, PageTitle, withAuth } from '@/components';
import { ROLES } from '@/enums/role';

const Edit = () => {
  return (
    <PageContainer>
      <PageTitle title='Editar Postagem' />
      <Divider />
    </PageContainer>
  );
};

export default withAuth(Edit, [ROLES.ADMIN, ROLES.TEACHER]);
