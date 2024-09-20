'use client';

import { useUserContext } from '@/contexts';
import { Feedback } from '@/components';
import { Loading } from '../Loading';

export const withAuth = (
  WrappedComponent: React.ComponentType,
  allowedRoles: string[]
) => {
  const ComponentWithAuth = () => {
    const isAuthPage = allowedRoles.length == 0;

    const {
      isLoading,
      user: { role },
    } = useUserContext();

    if (isLoading) {
      return <Loading />;
    }

    if (isAuthPage && role) {
      return (
        <Feedback
          title='Você já está logado.'
          buttonMessage='Ir para página inicial'
          href='/'
        />
      );
    }

    if (!isAuthPage && !role) {
      return (
        <Feedback
          title='401 - Não autorizado'
          description='Faça o login para continuar.'
          buttonMessage='Entrar'
          href='/login'
        />
      );
    }

    if (role && !allowedRoles.includes(role)) {
      return (
        <Feedback
          title='403 - Não autorizado'
          description='Você não possui permissão para acessar esta página.'
          buttonMessage='Voltar para página inicial'
          href='/'
        />
      );
    }

    return <WrappedComponent />;
  };

  ComponentWithAuth.displayName = `WithAuth(${
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
  })`;

  return ComponentWithAuth;
};
