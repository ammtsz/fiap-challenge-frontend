'use client';

import {
  Button,
  Card,
  Input,
  PageContainer,
  InputRadio,
  ErrorMessage,
} from '@/components';
import { useFormik } from 'formik';
import Link from 'next/link';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import { createUser } from '@/api/user';
import { useState } from 'react';

const Signup = () => {
  const [error, setError] = useState('');
  const router = useRouter();

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Este campo é obrigatório.'),
    email: Yup.string()
      .email('E-mail inválido')
      .required('Este campo é obrigatório.'),
    password: Yup.string().required('Este campo é obrigatório.'),
    confirmPassword: Yup.string()
      .required('Este campo é obrigatório')
      .oneOf([Yup.ref('password')], 'As senhas precisam ser iguais.'),
    role: Yup.string().required('Campo obrigatório. Selecione uma opção.'),
  });

  const submitFormData = async (values: {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    role: string;
  }) => {
    const response = await createUser(values);
    if (response.success) {
      alert('Usuário criado com sucesso!');
      router.push('/');
    } else {
      setError(
        response.error || 'Erro ao cadastrar o usuário. Tente novamente.'
      );
    }
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: '',
    },
    validationSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      submitFormData(values);
    },
  });

  return (
    <PageContainer>
      <p className='block text-center font-bold mb-12 mt-24 text-2xl'>
        Preencha os dados abaixo para se registrar:
      </p>
      <Card className='px-[12vw] xl:px-44 py-16 max-w-screen-md'>
        <form
          className='space-y-8 w-full max-w-md'
          onSubmit={formik.handleSubmit}
          method='post'
        >
          <Input
            id='username'
            name='username'
            label={{ text: 'Nome de usuário:' }}
            type='text'
            placeholder='Digite um nome de usuário...'
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            hasError={!!error || !!formik.errors.username}
          />
          {formik.errors.username ? (
            <ErrorMessage>{formik.errors.username}</ErrorMessage>
          ) : null}
          <Input
            id='email'
            name='email'
            label={{ text: 'E-mail:' }}
            type='text'
            placeholder='Digite seu e-mail...'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            hasError={!!error || !!formik.errors.email}
          />
          {formik.errors.email ? (
            <ErrorMessage>{formik.errors.email}</ErrorMessage>
          ) : null}
          <Input
            id='password'
            name='password'
            label={{ text: 'Senha:' }}
            type='password'
            placeholder='Digite sua senha:'
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            hasError={!!formik.errors.password}
          />
          {formik.errors.password ? (
            <ErrorMessage>{formik.errors.password}</ErrorMessage>
          ) : null}
          <Input
            id='confirmPassword'
            name='confirmPassword'
            label={{ text: 'Confirme sua senha:' }}
            type='password'
            placeholder='Confirme sua senha:'
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            hasError={!!formik.errors.confirmPassword}
          />
          {formik.errors.confirmPassword ? (
            <ErrorMessage>{formik.errors.confirmPassword}</ErrorMessage>
          ) : null}

          <fieldset
            id='role'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <p>Tipo de usuário:</p>
            <InputRadio
              id='student'
              name='role'
              value='student'
              label='Aluno'
            />
            <InputRadio
              id='teacher'
              name='role'
              value='teacher'
              label='Professor'
            />
            <InputRadio id='admin' name='role' value='admin' label='Admin' />
            {formik.errors.role ? (
              <ErrorMessage>
                <br />
                {formik.errors.role}
              </ErrorMessage>
            ) : null}
          </fieldset>
          <div>
            <Button
              className='bg-primary text-white w-full p-2 rounded-md'
              type='submit'
            >
              Registrar
            </Button>
            {error && (
              <ErrorMessage className='font-bold'>{error}</ErrorMessage>
            )}
          </div>
          <p className='block text-center'>
            Já possui uma conta? Faça o
            <span>
              <Link
                href='/login'
                className='text-blue-500 underline pl-1 text-nowrap'
              >
                login.
              </Link>
            </span>
          </p>
        </form>
      </Card>
    </PageContainer>
  );
};

export default Signup;
