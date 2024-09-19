'use client';

import { useRouter } from 'next/navigation';
import { logout } from '@/api/auth';
import { useUserContext } from '@/contexts/user';
import { LogOut as LogOutIcon, LogIn as LogInIcon } from 'react-feather';
import Link from 'next/link';

export const LoginLogout: React.FC = () => {
  const { user, resetUser } = useUserContext();
  const router = useRouter();

  const handleLogout = async () => {
    const response = await logout();

    if (response.success) {
      resetUser();
      router.push('/login');
    } else {
      console.error(response.error);
    }
  };

  return (
    <li className='flex ml-3 sm:ml-6 font-normal'>
      {user.username || user.email ? (
        <button
          className='underline text-sm flex items-center ml-2'
          onClick={handleLogout}
        >
          Sair
          <LogOutIcon className='h-4' />
        </button>
      ) : (
        <Link
          href='/login'
          className='underline text-sm flex items-center ml-2'
        >
          Entrar
          <LogInIcon className='h-4' />
        </Link>
      )}
    </li>
  );
};
