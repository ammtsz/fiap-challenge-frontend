"use client"

import { useParams } from 'next/navigation';

export const Post = () => {
  const params = useParams();
  const { id } = params;

  return (
    <main className="page">
      <h1>Post ID: {id}</h1>;
    </main>
  )
}

export default Post;