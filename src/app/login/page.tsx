'use client'

import { Button, PageContainer } from '@/components'
import { useLogin } from './hooks/useLogin'
import { Card } from '@/components/Card/Card'

const Login = () => {
  const { handleLogin } = useLogin()
  const fields = [
    {
      id: 'login',
      label: 'E-mail:',
      type: 'text',
      placeholder: 'Digite o seu e-mail...',
    },
    {
      id: 'password',
      label: 'Senha:',
      type: 'password',
      placeholder: 'Digite a sua senha...',
    },
  ]
  const spans = [
    {
      id: 'span1',
      text: 'Não possui uma conta? Registre-se.',
      className: 'text-black-500 block text-center pt-4',
      href: '/signup',
    },
  ]

  return (
    <PageContainer>
      <span className='block text-center font-bold mb-5'>Faça o login ou registre-se para continuar.</span>
      <Card
        fields={fields}
        spans={spans}
        ButtonComponent={() => (
          <Button
            {...{
              handleClick: handleLogin,
              className: 'bg-primary text-white w-full p-2 rounded-md',
              children: 'Entrar',
            }}
          />
        )}
      />
    </PageContainer>
  )
}

export default Login
