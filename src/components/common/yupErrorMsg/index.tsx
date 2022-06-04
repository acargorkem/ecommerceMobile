import { Text } from 'react-native';
import React from 'react';
import styles from './styles';

const YupErrorMessage: React.ComponentType<{}> = ({ children }) => {
  return <Text style={styles.errorMessages}>{children}</Text>;
};

export default YupErrorMessage;
