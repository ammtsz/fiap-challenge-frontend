import { AxiosError } from 'axios';
import { Result, Post } from '@/types';
import api from '@/api/lib/axios';
import { getErrorMessage } from '../utils/functions';
import { PostResponse } from './types';
import { mapPosts } from './utils';

export const getPosts = async (): Promise<Result<Post[]>> => {
  try {
    const { data } = await api.get<PostResponse[]>('/posts');

    return { success: true, value: mapPosts(data)}    
  } catch (error) {
    const message = getErrorMessage((error as AxiosError).status);
    
    return { success: false, error: message}
  }
}