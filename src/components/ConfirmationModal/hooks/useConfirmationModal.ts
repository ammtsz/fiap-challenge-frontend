'use client';

import { useState } from 'react';


export const useConfirmationModal = (handleConfirmation: () => void) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  const handleConfirm = () => {
    handleConfirmation();
    handleCloseModal();
  };

  return {
    isModalOpen,
    handleOpenModal,
    handleCloseModal,
    handleConfirm,
  };
};
