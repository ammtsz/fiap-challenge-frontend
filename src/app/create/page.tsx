'use client';

import {
  Card,
  Divider,
  PageContainer,
  PageTitle,
  PostForm,
  withAuth,
} from '@/components';
import { ROLES } from '@/enums/role';

const Create = () => {
  return (
    <PageContainer>
      <PageTitle title='Nova Postagem' />
      <Divider />
      <Card className='xs:px-12 xs:py-8 mt-4'>
        <PostForm />
      </Card>
    </PageContainer>
  );
};

export default withAuth(Create, [ROLES.ADMIN, ROLES.TEACHER]);
