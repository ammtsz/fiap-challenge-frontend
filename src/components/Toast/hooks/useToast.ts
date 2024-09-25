'use client';

import { useState } from 'react';
import { ToastProps } from '..';

export interface AddToastProps {
  message: string;
  type?: 'success' | 'error';
}

export const useToast = () => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const addToast = ({ message, type = 'success' }: AddToastProps) => {
    const id = Date.now();
    setToasts([...toasts, { id, message, type }]);
  };

  const removeToast = (id: number) => {
    setToasts(toasts.filter((toast) => toast.id !== id));
  };

  return { toasts, addToast, removeToast };
}
