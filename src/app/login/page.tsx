'use client'

import { Button, PageContainer, Span } from '@/components'
import { useLogin } from './hooks/useLogin'
import { Input } from '@/components'
import { Card } from '@/components'
const Login = () => {
  const { handleLogin } = useLogin()

  return (
    <PageContainer>
      <Span className='block text-center font-bold mb-5'>
        <h1>Faça o login ou registre-se para continuar.</h1>
      </Span>
      <Card>
        <form className='space-y-4 w-full max-w-md'>
          <Input
            id='login'
            label='E-mail:'
            type='text'
            placeholder='Digite o seu e-mail...'
          />
          <Input
            id='password'
            label='Senha:'
            type='password'
            placeholder='Digite a sua senha...'
          />
          <Button
            {...{
              handleClick: handleLogin,
              className: 'bg-primary text-white w-full p-2 rounded-md',
              children: 'Entrar',
            }}
          />
          <Span className='block text-center'>
            Não possui uma conta?{' '}
            <a href='/signup' className='text-blue-500 underline'>
              Registre-se.
            </a>
          </Span>
        </form>
      </Card>
    </PageContainer>
  )
}

export default Login
