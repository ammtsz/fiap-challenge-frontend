'use client';

import { Toast } from './Toast';

export interface ToastProps {
  id: number;
  message: string;
  type: 'success' | 'error';
}

interface ToastContainerProps {
  removeToast: (id: number) => void;
  toasts: ToastProps[];
}

export const ToastContainer: React.FC<ToastContainerProps> = ({
  toasts,
  removeToast,
}) => {
  return (
    <div>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  );
};
