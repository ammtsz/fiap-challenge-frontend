'use client';

import { createPost, deletePost, getPostById, updatePost } from '@/api/posts';
import { useUserContext } from '@/contexts';
import { PostData } from '@/types';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AddToastProps } from '@/components';

const INITIAL_STATE: PostData = {
  title: '',
  image: '',
  content: '',
};

interface UsePostFormProps {
  id?: string;
  addToast: (pros: AddToastProps) => void;
}

export const usePostForm = ({id, addToast}: UsePostFormProps) => {
  const [post, setPost] = useState<PostData>(INITIAL_STATE);
  const [hasError, setError] = useState<boolean>(false);

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

  const handleDelete = (id: string) => async () => {
    const response = await deletePost(id);
    if (response.success) {
      router.push('/');
    } else {
      addToast({
        message: response.error,
        type: 'error'
      });
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
      setError(true);
    }
  };

  useEffect(() => {
    if (id) {
      loadPost(id);
    }
  }, [id]);

  return {
    post,
    hasError,
    handleChange,
    handleSubmit,
    handleUpload,
    handleDelete,
    handleGoBack
  };
};
