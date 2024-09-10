import { Result, User } from '@/types';
import api from '@/api/lib/axios';
import { UserResponse } from './types';
import { AxiosError } from 'axios';
import { getErrorMessage } from '../utils/functions';

export const getUser = async (email: string): Promise<Result<User>> => {
  try {
    const { data } = await api.get<UserResponse>('/user', { params: { email } });
    if (data.password) delete data.password;
    
    return { success: true, value: data}    
  } catch (error) {
    const message = getErrorMessage((error as AxiosError).status);
    
    return { success: false, error: message}
  }
}