import { useUserContext } from '@/contexts/user';
import { ROLES, ROLES_LABEL } from '@/enums/role';
import { useCallback } from 'react';
import { LinkButton } from '@/components';

export const Greeting: React.FC = () => {
  const {
    user: { role, username, email },
  } = useUserContext();

  const getGreetingName = useCallback(() => {
    switch (role) {
      case ROLES.ADMIN:
        return `${username || email}`;
      case ROLES.TEACHER:
        return `${ROLES_LABEL.TEACHER} ${username || email}`;
      case ROLES.STUDENT:
        return username || email;
      default:
        return 'Visitante';
    }
  }, [email, role, username]);

  const isAdmin = role === ROLES.ADMIN;

  return isAdmin ? (
    <LinkButton variation='secondary' href='/admin'>
      Admin
    </LinkButton>
  ) : (
    <li className='text-lg flex'>
      <span className='hidden lg:block mr-2 text-nowrap'>Bem vindo,</span>
      <span className='w-32 2xs:w-[45vw] sm:w-full text-end truncate'>
        {getGreetingName()}
      </span>
    </li>
  );
};
