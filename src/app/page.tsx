'use client';

import PostsPage from './posts/page';
import LoginPage from './login/page';
import { useUserContext } from '@/contexts';

function Home() {
  const {
    user: { email },
  } = useUserContext();

  return email ? <PostsPage /> : <LoginPage />;
}

export default Home;
