import React, { useEffect } from 'react';
import { AlertCircle as ErrorIcon, X as CloseIcon } from 'react-feather';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 10000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed bottom-4 right-4 p-4 rounded shadow-md shadow-black flex font-bold animate-slide ml-4 ${
        type === 'success' ? 'bg-green-600' : 'bg-danger'
      } text-white`}
    >
      {type === 'error' && <ErrorIcon className='mr-2' />}
      {message}
      <button onClick={onClose} className='ml-4'>
        <CloseIcon className='ml-auto h-4' />
      </button>
    </div>
  );
};
