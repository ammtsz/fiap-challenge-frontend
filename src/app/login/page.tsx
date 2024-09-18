'use client';

import { Button, PageContainer } from '@/components';
import { useLogin } from './hooks/useLogin';
import { Input } from '@/components';
import { Card } from '@/components';
const Login = () => {
  const { handleLogin, email, password, setEmail, setPassword } = useLogin();

  return (
    <PageContainer>
      <p className='block text-center font-bold mb-5'>
        Faça o login ou registre-se para continuar.
      </p>
      <Card>
        <form className='space-y-4 w-full max-w-md' onSubmit={handleLogin}>
          <Input
            id='login'
            label='E-mail:'
            type='text'
            placeholder='Digite o seu e-mail...'
            value={email}
            handleChange={setEmail}
          />
          <Input
            id='password'
            label='Senha:'
            type='password'
            placeholder='Digite a sua senha...'
            value={password}
            handleChange={setPassword}
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
              <a href='/signup' className='text-blue-500 underline pl-1'>
                Registre-se.
              </a>
            </span>
          </p>
        </form>
      </Card>
    </PageContainer>
  );
};

export default Login;
