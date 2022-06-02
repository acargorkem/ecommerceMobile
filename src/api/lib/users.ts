import client from '../client';

export const login = async (email: string, password: string) => {
  return client.post('/users/login', { email, password });
};
