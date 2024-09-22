'use client';

import { Button, PageContainer, withAuth } from '@/components';
import { useLogin } from './hooks/useLogin';
import { Input } from '@/components';
import { Card } from '@/components';
import Link from 'next/link';

const Login = () => {
  const { handleLogin, email, password, setEmail, setPassword } = useLogin();

  return (
    <PageContainer>
      <p className='block text-center font-bold mb-12 mt-24 text-2xl'>
        Faça o login ou registre-se para continuar.
      </p>
      <Card className='px-[12vw] xl:px-44 py-16 max-w-screen-md'>
        <form className='space-y-8 w-full max-w-md' onSubmit={handleLogin}>
          <Input
            id='login'
            label={{ text: 'E-mail:' }}
            type='text'
            placeholder='Digite o seu e-mail...'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            id='password'
            label={{ text: 'Senha:' }}
            type='password'
            placeholder='Digite a sua senha...'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            className='bg-primary text-white w-full p-2 rounded-md'
            type='submit'
          >
            Entrar
          </Button>
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
