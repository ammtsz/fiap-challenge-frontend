'use client';

import { Feedback } from '@/components';
import { useUserContext } from '@/contexts';

const NotFound = () => {
  const {
    user: { email },
  } = useUserContext();

  return (
    <Feedback
      title='404 - Página não encontrada'
      buttonMessage='Voltar'
      href={email ? '/' : '/login'}
    />
  );
};

export default NotFound;
