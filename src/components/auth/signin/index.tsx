import { View, Text, Image } from 'react-native';
import React from 'react';
import { Button, TextInput, Checkbox } from 'react-native-paper';
import styles from './styles';
import image1 from '../../../../public/images/image3.jpg';

const AuthMenu = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [rememberMe, setRememberMe] = React.useState(false);

  return (
    <View style={styles.container}>
      <Image style={styles.imageContainer} source={image1} />
      <View style={styles.formContainer}>
        <Text style={styles.header}>Sign in</Text>
        <TextInput
          onChangeText={setEmail}
          value={email}
          label="Email"
          mode="outlined"
          keyboardType="email-address"
        />
        <TextInput
          onChangeText={setPassword}
          value={password}
          mode="outlined"
          label="Password"
          secureTextEntry
        />
        <View style={styles.row}>
          <Checkbox.Item
            label="Remember Me"
            position="leading"
            status={rememberMe ? 'checked' : 'unchecked'}
            style={styles.checkbox}
            labelStyle={styles.btnLabels}
            onPress={() => {
              setRememberMe((prevState) => !prevState);
            }}
          />
          <Button
            mode="text"
            color="black"
            labelStyle={styles.btnLabels}
            uppercase={false}
            onPress={() => console.log('Forgot Password?')}
          >
            Forgot Password?
          </Button>
        </View>
        <Button
          mode="contained"
          uppercase={false}
          onPress={() => console.log('Sign In')}
        >
          Sign In
        </Button>
        <Button
          mode="text"
          color="black"
          style={styles.signupButtton}
          labelStyle={styles.btnLabels}
          uppercase={false}
          onPress={() => console.log(`Don't have an account? Sign up`)}
        >
          Don't have an account? Sign up
        </Button>
      </View>
    </View>
  );
};

export default AuthMenu;
