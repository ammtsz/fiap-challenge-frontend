'use client';

import { createPost, deletePost, getPostById, updatePost } from '@/api/posts';
import { useUserContext } from '@/contexts';
import { PostData } from '@/types';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AddToastProps } from '@/components';
import { useFormik } from 'formik';
import * as Yup from 'yup';

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

  const handleSubmit = () => {
    if (id) {
      updatePost(id, { ...post, userId: user.id });
    } else {
      createPost({ ...post, userId: user.id });
    }
    setPost(INITIAL_STATE);
    router.push('/');
  };

  const formik = useFormik({
    initialValues: {
      title: post.title || '',
      content: post.content || '',
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Campo obrigatório'),
      content: Yup.string().min(150, 'O conteúdo deve conter no mínimo 150 caracteres').required('Campo obrigatório'),
    }),
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: handleSubmit
  });

  const handleChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    const { value, name } = event.target;
    
    setPost((prev) => ({ ...prev, [name]: value }));
    formik.setFieldValue(name, value);
  };

  const handleUpload = (base64String: string) => {
    setPost((prev) => ({ ...prev, image: base64String }));
  };

  const handleDelete = async (id: string) => {
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
      formik.setFieldValue('title', response.value.title);
      formik.setFieldValue('content', response.value.content);
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
    formik,
    handleChange,
    handleSubmit,
    handleUpload,
    handleDelete,
    handleGoBack
  };
};
