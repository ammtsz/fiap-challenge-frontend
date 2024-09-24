import { ERROR_MESSAGE } from './messages';

export const getErrorMessage = (status?: number) => {
  if(status) {
    switch (status) {
      case 401:
        return ERROR_MESSAGE.UNAUTHORIZED;
      case 403:
        return ERROR_MESSAGE.FORBIDDEN;
      case 409:
        return ERROR_MESSAGE.CONFLICT;
      default:
        return ERROR_MESSAGE.INTERNAL_SERVER_ERROR;
    }
  } else {
    return ERROR_MESSAGE.INTERNAL_SERVER_ERROR;
  }
}