import { Result, User } from '@/types';
import api from '@/api/lib/axios';
import { UserResponse } from './types';
import { AxiosError } from 'axios';
import { getErrorMessage } from '../utils/functions';

export const getLoggedUser = async (): Promise<Result<User>> => {
  try {
    const { data } = await api.get<UserResponse>('/user/logged');
    
    return { success: true, value: data}
  } catch (error) {
    const message = getErrorMessage((error as AxiosError).status);
    
    return { success: false, error: message}
  }
}