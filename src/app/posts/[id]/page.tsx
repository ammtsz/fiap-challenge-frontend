"use client"

import { Divider, PageContainer, PageTitle } from '@/components';
import { useParams } from 'next/navigation';

export const Post = () => {
  const params = useParams();
  const { id } = params;

  return (
    <PageContainer>
      <PageTitle title="Leitura de Postagem"/>
      <Divider />
      <div>Post ID: {id}</div>;
    </PageContainer>
  )
}

export default Post;