'use client';

import {
  SearchBar,
  PageTitle,
  Divider,
  PageContainer,
  withAuth,
} from '@/components';
import { usePostsContext } from '@/contexts';
import { ROLES } from '@/enums/role';
import { formatDate, formatTime } from '@/utils/dateAndTime';
import { useEffect } from 'react';

const Posts = () => {
  const { posts, loadPosts } = usePostsContext();

  useEffect(() => {
    loadPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageContainer>
      <PageTitle title='Lista de Posts' />
      <Divider />
      <SearchBar className='block md:hidden' />

      {posts.map((post) => {
        return (
          <div key={post.id} className='flex flex-col mb-8'>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <span>{post.author}</span>
            <span>{formatDate(post.date)}</span>
            <span>{formatTime(post.date)}</span>
          </div>
        );
      })}
    </PageContainer>
  );
};

export default withAuth(Posts, [ROLES.ADMIN, ROLES.TEACHER, ROLES.STUDENT]);
