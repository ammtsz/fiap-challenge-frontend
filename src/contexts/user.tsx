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

const INITIAL_STATE: User = {
  email: '',
  username: '',
  role: null,
  id: '',
};

interface UserContextProps {
  user: User;
  isLoading: boolean;
  loadLoggedUser: () => Promise<void>;
  resetUser: () => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User>(INITIAL_STATE);
  const [isLoading, setLoading] = useState<boolean>(false);

  const resetUser = () => {
    setUser(INITIAL_STATE);
  };

  const loadLoggedUser = useCallback(async () => {
    setLoading(true);
    const response = await getLoggedUser();

    if (response.success) {
      setUser(response.value);
    } else {
      console.error(response.error);
      setUser(INITIAL_STATE);
    }
    setLoading(false);
  }, []);

  useLayoutEffect(() => {
    loadLoggedUser();
  }, [loadLoggedUser]);

  return (
    <UserContext.Provider
      value={{ user, isLoading, loadLoggedUser, resetUser }}
    >
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
