import { View, Text } from 'react-native';
import React from 'react';
import Signin from '../../components/auth/signin';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../store/userSlice';
import { AppDispatch } from '../../store';
import config from '../../utils/config';

const SigninScreen = () => {
  const dispatch: AppDispatch = useDispatch();

  const onSigninPressHandle = (email: string, password: string) => {
    dispatch(loginThunk({ email, password }));
  };

  return <Signin onSigninPressHandle={onSigninPressHandle} />;
};

export default SigninScreen;
