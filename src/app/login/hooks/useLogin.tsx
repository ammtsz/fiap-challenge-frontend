
import { login }  from "@/api/auth"
import { getPosts } from "@/api/posts";
import { getUser } from "@/api/user";

const mockUser = 'studenttest@mail.com'
const mockPassword = '123'

export const useLogin = () => {
  const handleLogin = async () => {
    const response = await login(mockUser, mockPassword);

    if(response.success) {
      console.log('login realizado com sucesso');
    } else {
      console.error(response.error);
    }
  }

  const handlePosts = async () => {
    const response = await getPosts()
    if(response.success) {
      console.log(response.value);
    } else {
      console.error(response.error);
    }
  }

  const handleUser = async () => {
    const response = await getUser(mockUser)
    if(response.success) {
      console.log(response.value);
    } else {
      console.error(response.error);
    }
  }

  return { handleLogin, handlePosts, handleUser }
}