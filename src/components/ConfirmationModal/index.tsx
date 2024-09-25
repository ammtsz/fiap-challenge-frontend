import React from 'react';
import { Button } from '@/components';

interface ConfirmationModalProps {
  isOpen: boolean;
  title?: string;
  message?: string;
  actionName?: string;
  onClose: () => void;
  onConfirm: () => void;
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  actionName,
}) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center'>
      <div className='bg-white p-8 rounded-lg shadow-lg max-w-md'>
        <h2 className='text-2xl font-bold text-primary mb-4'>
          {title || 'Confirmar ação'}
        </h2>
        <p className='mb-4 text-md'>
          {message ||
            'Tem certeza de que deseja continuar? Esta ação não poderá ser desfeita.'}
        </p>
        <div className='flex gap-2 justify-end mt-4'>
          <Button variation='tertiary' onClick={onClose}>
            Cancelar
          </Button>
          <Button variation='danger' onClick={onConfirm}>
            {actionName || 'Confirmar'}
          </Button>
        </div>
      </div>
    </div>
  );
};
