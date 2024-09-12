
import { login }  from "@/api/auth"
import { getPosts } from "@/api/posts";
import { useUserContext } from "@/contexts/user";


const mockUser = 'teacher@mail.com'
const mockPassword = '123'

export const useLogin = () => {
  const { loadLoggedUser } = useUserContext();

  const handleLogin = async () => {
    const response = await login(mockUser, mockPassword);

    if(response.success) {
      loadLoggedUser();
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

  return { handleLogin, handlePosts }
}