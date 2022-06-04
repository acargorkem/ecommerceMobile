import React from 'react';
import Signup from '../../../components/auth/signup';
import { useDispatch } from 'react-redux';
import { signupThunk } from '../../../store/userSlice';
import { AppDispatch } from '../../../store';

const SignupScreen = () => {
  const dispatch: AppDispatch = useDispatch();

  const onSignup = (
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    password: string,
  ) => {
    dispatch(signupThunk({ firstName, lastName, phone, email, password }));
  };

  return <Signup onSignup={onSignup} />;
};

export default SignupScreen;
