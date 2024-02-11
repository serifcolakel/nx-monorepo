import { AxiosError } from 'axios';

export const handleErrorResponse = (error: unknown) => {
  let message: string = '';

  if (error instanceof Error) {
    message = error.message;
  }

  if (error instanceof AxiosError) {
    message = error.message;
  }

  return {
    data: null,
    message,
    success: false,
  };
};
