"use client"

import { useParams } from 'next/navigation';

export const Post = () => {
  const params = useParams();
  const { id } = params;

  return <h1>Post ID: {id}</h1>;
}

export default Post;