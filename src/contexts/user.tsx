'use client';

import { getLoggedUser } from '@/api/user';
import { User } from '@/types';
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useLayoutEffect,
  useCallback,
} from 'react';
import { useRouter } from 'next/navigation';

const INITIAL_STATE: User = {
  email: '',
  username: '',
  role: 'student',
};

interface UserContextProps {
  user: User;
  loadLoggedUser: () => void;
  resetUser: () => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User>(INITIAL_STATE);
  const router = useRouter();

  const resetUser = () => {
    setUser(INITIAL_STATE);
  };

  const loadLoggedUser = useCallback(async () => {
    const response = await getLoggedUser();
    if (response.success) {
      setUser(response.value);
    } else {
      console.error(response.error);
      setUser(INITIAL_STATE);
      router.push('/login');
    }
  }, [router]);

  useLayoutEffect(() => {
    loadLoggedUser();
  }, [loadLoggedUser]);

  return (
    <UserContext.Provider value={{ user, loadLoggedUser, resetUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = (): UserContextProps => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};
