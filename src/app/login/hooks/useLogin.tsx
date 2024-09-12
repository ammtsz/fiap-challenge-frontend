
import { login }  from "@/api/auth"
import { usePostsContext } from "@/contexts/posts";
import { useUserContext } from "@/contexts/user";
import { useRouter } from 'next/navigation';

const mockUser = 'teacher@mail.com'
const mockPassword = '123'

export const useLogin = () => {
  const { loadLoggedUser } = useUserContext();
  const { searchPosts } = usePostsContext();
  const router = useRouter();

  const handleLogin = async () => {
    const response = await login(mockUser, mockPassword);

    if(response.success) {
      loadLoggedUser();
      searchPosts();
      router.push('/');
    } else {
      console.error(response.error);
    }
  }

  return { handleLogin }
}