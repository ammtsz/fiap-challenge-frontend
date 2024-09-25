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
import { useParams } from 'next/navigation';

const Edit = () => {
  const params = useParams();
  const { id } = params;

  return (
    <PageContainer>
      <PageTitle title='Editar Postagem' />
      <Divider />
      <Card className='px-12 py-8 mt-4'>
        <PostForm id={id as string} />
      </Card>
    </PageContainer>
  );
};

export default withAuth(Edit, [ROLES.ADMIN, ROLES.TEACHER]);