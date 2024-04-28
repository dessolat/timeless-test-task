import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

import { type TDeleteUser, type TUser } from 'types';

import userService from 'services/user.service';

function useUsers() {
  const [users, setUsers] = useState<TUser[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getUsers = useCallback(async (amount: number = 0) => {
    try {
      setIsLoading(true);

      const data = await userService.fetchAmount(amount);

      setUsers(data.results);
      setError(null);
    } catch (error) {
      if (axios.isAxiosError(error) || error instanceof Error) setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getUsers(500);
  }, [getUsers]);

  const deleteUser: TDeleteUser = phoneNumber => () => {
    setUsers(users.filter(user => user.phone !== phoneNumber));
  };

  return { users, isLoading, error, getUsers, deleteUser };
}
export default useUsers;
