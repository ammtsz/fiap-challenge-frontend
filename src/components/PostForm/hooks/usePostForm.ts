'use client';

import { createPost, deletePost, getPostById, updatePost } from '@/api/posts';
import { useUserContext } from '@/contexts';
import { PostData } from '@/types';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const INITIAL_STATE: PostData = {
  title: '',
  image: '',
  content: '',
};

export const usePostForm = (id?: string) => {
  const [post, setPost] = useState<PostData>(INITIAL_STATE);

  const { user } = useUserContext();
  const router = useRouter();

  const handleChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    const { value } = event.target;
    setPost((prev) => ({ ...prev, [event.target.id]: value }));
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (id) {
      updatePost(id, { ...post, userId: user.id });
    } else {
      createPost({ ...post, userId: user.id });
    }
    setPost(INITIAL_STATE);
    router.push('/');
  };

  const handleUpload = (base64String: string) => {
    setPost((prev) => ({ ...prev, image: base64String }));
  };

  const handleDelete = async (id: string) => {
    // TODO: adicionar modal de confirmação de exclusão
    const response = await deletePost(id);
    if (response.success) {
      router.push('/');
    } else {
      // TODO: adicionar feedback de erro
      console.error(response.error);
    }
  };

  const handleGoBack = () => {
    router.back()
  }

  const loadPost = async (id: string) => {
    const response = await getPostById(id);
    if (response.success) {
      setPost({
        title: response.value.title,
        content: response.value.content,
        image: response.value.image,
      });
    } else {
      console.error(response.error);
    }
  };

  useEffect(() => {
    if (id) {
      loadPost(id);
    }
  }, [id]);

  return {
    post,
    handleChange,
    handleSubmit,
    handleUpload,
    handleDelete,
    handleGoBack
  };
};
