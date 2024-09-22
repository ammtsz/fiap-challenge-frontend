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

const Edit = () => {
  // TODO: pegar id na url
  const id = '123';

  return (
    <PageContainer>
      <PageTitle title='Editar Postagem' />
      <Divider />
      <Card className='px-12 py-8 mt-4'>
        <PostForm id={id} />
      </Card>
    </PageContainer>
  );
};

export default withAuth(Edit, [ROLES.ADMIN, ROLES.TEACHER]);
