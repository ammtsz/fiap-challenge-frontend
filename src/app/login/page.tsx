"use client"

import { Button, LinkButton } from "@/components"
import { useLogin } from "./hooks/useLogin";

const Login = () => {
  const { handleLogin, handlePosts } = useLogin()

  return (
    <main className="page">
      <h1 className="mb-12">Login Page</h1>
        <Button className="mb-2" handleClick={handleLogin} >Login</Button>
        <div className="flex gap-2">
          <LinkButton
            href="/signup"
            className="flex-grow"
            variation="danger"
            handleClick={handleLogin}
          >
            Registrar-se
          </LinkButton>
          <Button
            className="flex-grow"
            variation="secondary"
            handleClick={handlePosts}
          >
            Get Posts
          </Button>
        </div>
    </main>
  )
};

export default Login;