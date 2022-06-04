import React from 'react';
import Signin from '../../../components/auth/signin';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../../store/userSlice';
import { AppDispatch } from '../../../store';

const SigninScreen = () => {
  const dispatch: AppDispatch = useDispatch();

  const login = (email: string, password: string) => {
    dispatch(loginThunk({ email, password }));
  };

  return <Signin login={login} />;
};

export default SigninScreen;
