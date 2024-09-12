"use client"

import { Button, LinkButton, PageContainer } from "@/components"
import { useLogin } from "./hooks/useLogin";

const Login = () => {
  const { handleLogin } = useLogin()

  return (
    <PageContainer>
      <h1 className="mb-12">Login Page</h1>
        <Button className="mb-2" handleClick={handleLogin}>Login</Button>
        <LinkButton
          href="/signup"
          className="flex-grow"
          variation="danger">
          Registrar-se
        </LinkButton>
    </PageContainer>
  )
};

export default Login;