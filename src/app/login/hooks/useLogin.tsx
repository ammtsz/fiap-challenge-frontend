import { login } from "@/api/auth";
import { usePostsContext, useUserContext } from "@/contexts";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loadLoggedUser } = useUserContext();
  const { searchPosts } = usePostsContext();
  const router = useRouter();

  const handleLogin = async () => {
    const response = await login(email, password);

    if (response.success) {
      loadLoggedUser();
      searchPosts();
      router.push("/");
    } else {
      console.error(response.error);
    }
  };

  return { email, password, handleLogin, setEmail, setPassword };
};
