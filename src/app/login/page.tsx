"use client"

import { Button } from "@/components"
import { useLogin } from "./hooks/useLogin";

const Login = () => {
  const { handleLogin, handlePosts, handleUser } = useLogin()

  return (
    <div className="page">
      <h1 className="mb-12" >Login Page</h1>
        <Button className="mb-2" handleClick={handleLogin} >Login</Button>
        <div className="flex gap-2">
          <Button className="flex-grow" variation="secondary" handleClick={handlePosts} >Get Posts</Button>
          <Button className="flex-grow" variation="danger" handleClick={handleUser} >Get User</Button>
        </div>
    </div>
  )
};

export default Login;