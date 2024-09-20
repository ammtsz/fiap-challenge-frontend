'use client';

import { filterPosts } from '@/api/posts';
import { Post } from '@/types';
import { debounce } from '@/utils/debounce';
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface PostsContextProps {
  posts: Post[];
  searchPosts: (term?: string) => void;
  loadPosts: () => void;
}

const PostsContext = createContext<PostsContextProps | undefined>(undefined);

export const PostsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [posts, setPosts] = useState<Post[]>([]);

  const loadPosts = async (term = '') => {
    const response = await filterPosts(term);

    if (response.success) {
      setPosts(response.value);
    } else {
      console.error(response.error);
    }
  };

  const searchPosts = debounce(loadPosts, 600);

  return (
    <PostsContext.Provider value={{ posts, searchPosts, loadPosts }}>
      {children}
    </PostsContext.Provider>
  );
};

export const usePostsContext = (): PostsContextProps => {
  const context = useContext(PostsContext);
  if (context === undefined) {
    throw new Error('usePostsContext must be used within a PostsProvider');
  }
  return context;
};
