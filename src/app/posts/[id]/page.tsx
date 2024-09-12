"use client"

import { Divider, PageTitle } from '@/components';
import { useParams } from 'next/navigation';

export const Post = () => {
  const params = useParams();
  const { id } = params;

  return (
    <main className="page">
      <PageTitle title="Leitura de Postagem"/>
      <Divider />
      <div>Post ID: {id}</div>;
    </main>
  )
}

export default Post;