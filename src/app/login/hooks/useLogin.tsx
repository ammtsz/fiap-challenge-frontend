import { login } from '@/api/auth';
import { usePostsContext, useUserContext } from '@/contexts';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

export const useLogin = () => {
  const { loadLoggedUser } = useUserContext();
  const { searchPosts } = usePostsContext();
  const router = useRouter();
  const [error, setError] = useState<string>('');

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('E-mail inválido')
        .required('Campo obrigatório'),
      password: Yup.string().required('Campo obrigatório'),
    }),
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values) => {
      handleLogin(values);
    },
  });

  const handleLogin = async (values: { email: string; password: string }) => {
    const response = await login(values.email, values.password);

    if (response.success) {
      await loadLoggedUser();
      searchPosts();
      router.push('/');
    } else {
      setError(response.error);
    }
  };

  return { formik, error };
};
