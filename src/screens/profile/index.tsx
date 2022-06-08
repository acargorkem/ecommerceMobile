import React from 'react';
import { useDispatch } from 'react-redux';
import Profile from '../../components/profile';
import { logout } from '../../store/userSlice';

const ProfileScreen = () => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return <Profile onLogout={onLogout} />;
};

export default ProfileScreen;
