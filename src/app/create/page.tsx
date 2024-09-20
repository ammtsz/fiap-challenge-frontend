'use client';

import { Divider, PageContainer, PageTitle, withAuth } from '@/components';
import { ROLES } from '@/enums/role';

const Create = () => {
  return (
    <PageContainer>
      <PageTitle title='Nova Postagem' />
      <Divider />
    </PageContainer>
  );
};

export default withAuth(Create, [ROLES.ADMIN, ROLES.TEACHER]);
