import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import AuthMenu from '../../components/auth/signin';

const Auth = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AuthMenu />
    </SafeAreaView>
  );
};

export default Auth;
