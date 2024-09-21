import { AxiosError } from 'axios';
import { Result, Post } from '@/types';
import api from '@/api/lib/axios';
import { getErrorMessage } from '../utils/functions';
import { PostPost, PostResponse } from './types';
import { mapPosts } from './utils';

export const filterPosts = async (term = '' ): Promise<Result<Post[]>> => {
  try {
    const { data } = await api.get<PostResponse[]>('/posts/search', { params: { term } });

    return { success: true, value: mapPosts(data)}    
  } catch (error) {
    const message = getErrorMessage((error as AxiosError).status);
    
    return { success: false, error: message}
  }
}

export const getPostById = async (id: number): Promise<Result<Post>> => {
  try {
    const { data } = await api.get<PostResponse>(`/posts/${id}`);

    return { success: true, value: mapPosts([data])[0]}    
  } catch (error) {
    const message = getErrorMessage((error as AxiosError).status);
    
    return { success: false, error: message}
  }
}

export const createPost = async (post: PostPost): Promise<Result<void>> => {
  try {
    await api.post<PostResponse>('/posts', {
      title: post.title,
      content: post.content,
      image: post.image,
      user_id: post.userId
    });

    return { success: true, value: undefined}
  } catch (error) {
    const message = getErrorMessage((error as AxiosError).status);
    
    return { success: false, error: message}
  }
}

export const updatePost = async (id: string, post: Partial<PostPost>): Promise<Result<void>> => {
  try {
    await api.put(`/posts/${id}`, post);
    return { success: true, value: undefined}
  } catch (error) {
    const message = getErrorMessage((error as AxiosError).status);
    
    return { success: false, error: message}
  }
}