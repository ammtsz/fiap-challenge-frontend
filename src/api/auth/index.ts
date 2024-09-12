import { AxiosError } from 'axios';
import api from '@/api/lib/axios'
import { ERROR_MESSAGE } from '@/api/utils/messages'
import { Result } from '@/types'

export const login = async (email: string, password: string): Promise<Result<void>> => {
  try {
    await api.post('/auth/login', { email, password });
    return { success: true, value: undefined }
  } catch (error) {
    const message = (error as AxiosError).status === 401
      ? ERROR_MESSAGE.LOGIN_FAILED
      : ERROR_MESSAGE.INTERNAL_SERVER_ERROR
    
    return { success: false, error: message}
  }
}

export const logout = async (): Promise<Result<void>> => {
  try {
    await api.post('/auth/logout');
    return { success: true, value: undefined }
  } catch (error) {
    return { success: false, error: ERROR_MESSAGE.INTERNAL_SERVER_ERROR}
  }
}

