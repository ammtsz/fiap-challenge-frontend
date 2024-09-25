'use client';

import {
  Button,
  PageContainer,
  withAuth,
  Input,
  Card,
  ErrorMessage,
} from '@/components';
import { useLogin } from './hooks/useLogin';
import Link from 'next/link';

const Login = () => {
  const { formik, error } = useLogin();

  return (
    <PageContainer>
      <p className='block text-center font-bold mb-12 mt-24 text-2xl'>
        Faça o login ou registre-se para continuar.
      </p>
      <Card className='px-[12vw] xl:px-44 py-16 max-w-screen-md'>
        <form
          className='space-y-8 w-full max-w-md'
          onSubmit={formik.handleSubmit}
        >
          <Input
            id='email'
            label={{ text: 'E-mail:' }}
            type='text'
            placeholder='Digite o seu e-mail...'
            onChange={formik.handleChange}
            value={formik.values.email}
            hasError={!!error}
          />
          {formik.errors.email ? (
            <ErrorMessage>{formik.errors.email}</ErrorMessage>
          ) : null}
          <Input
            id='password'
            label={{ text: 'Senha:' }}
            type='password'
            placeholder='Digite a sua senha...'
            onChange={formik.handleChange}
            value={formik.values.password}
            hasError={!!error}
          />
          {formik.errors.password ? (
            <ErrorMessage>{formik.errors.password}</ErrorMessage>
          ) : null}
          <div>
            <Button
              className='bg-primary text-white w-full p-2 rounded-md'
              type='submit'
            >
              Entrar
            </Button>
            {error && (
              <ErrorMessage className='font-bold'>{error}</ErrorMessage>
            )}
          </div>
          <p className='block text-center'>
            Não possui uma conta?
            <span>
              <Link
                href='/signup'
                className='text-blue-500 underline pl-1 text-nowrap'
              >
                Registre-se.
              </Link>
            </span>
          </p>
        </form>
      </Card>
    </PageContainer>
  );
};

export default withAuth(Login, []);
