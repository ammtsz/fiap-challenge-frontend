'use client';

import { Divider, PageContainer, PageTitle, withAuth } from '@/components';
import { ROLES } from '@/enums/role';
import { useParams } from 'next/navigation';

export const Post = () => {
  const params = useParams();
  const { id } = params;

  return (
    <PageContainer>
      <PageTitle title='Leitura de Postagem' />
      <Divider />
      <div>Post ID: {id}</div>;
    </PageContainer>
  );
};

export default withAuth(Post, [ROLES.ADMIN, ROLES.TEACHER, ROLES.STUDENT]);
