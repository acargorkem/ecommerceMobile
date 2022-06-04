import client from '../client';

export const login = async (email: string, password: string) => {
  return client.post('/users/login', { email, password });
};

export const signup = async (
  first_name: string,
  last_name: string,
  phone: string,
  email: string,
  password: string,
) => {
  return client.post('/users/signup', {
    first_name,
    last_name,
    phone,
    email,
    password,
  });
};
