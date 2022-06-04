import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React from 'react';
import Checkbox from 'expo-checkbox';
import styles from './styles';
import image1 from '../../../../public/images/signin.jpg';
import theme from '../../../styles/theme';
import { ErrorMessage, Formik } from 'formik';
import { signinForm } from './signin.form';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../../../types';
import YupErrorMessage from '../../common/yupErrorMsg';
interface Props {
  login: (email: string, password: string) => void;
}

const Signin: React.FC<Props> = ({ login }) => {
  const [isRemember, setIsRemember] = React.useState(false);
  const navigation = useNavigation<NavigationProps>();

  return (
    <View style={styles.container}>
      <Image style={styles.imageContainer} source={image1} />
      <View style={styles.formContainer}>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values) => login(values.email, values.password)}
          validationSchema={signinForm}
        >
          {({ handleSubmit, handleChange, setFieldTouched }) => (
            <>
              <Text style={styles.header}>Sign in</Text>
              <TextInput
                style={styles.inputs}
                onChangeText={handleChange('email')}
                onFocus={() => setFieldTouched('email')}
                placeholder="Email"
                keyboardType="email-address"
              />
              <ErrorMessage name="email" component={YupErrorMessage} />
              <TextInput
                style={styles.inputs}
                onChangeText={handleChange('password')}
                onFocus={() => setFieldTouched('password')}
                placeholder="Password"
                secureTextEntry
              />
              <ErrorMessage name="password" component={YupErrorMessage} />
              <View style={styles.row}>
                <Pressable
                  style={styles.rememberMeButton}
                  onPress={() => setIsRemember((prevState) => !prevState)}
                >
                  <Checkbox
                    style={styles.checkbox}
                    value={isRemember}
                    onValueChange={() => {
                      setIsRemember((prevState) => !prevState);
                    }}
                    color={
                      isRemember ? theme.palette.primary_accent : undefined
                    }
                  />
                  <Text style={styles.btnLabels}>Remember Me</Text>
                </Pressable>

                <TouchableOpacity
                  onPress={() => navigation.navigate('ForgotPassword')}
                >
                  <Text style={styles.btnLabels}>Forgot Password?</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.signinButton}
                activeOpacity={0.65}
                onPress={() => handleSubmit()}
              >
                <Text style={styles.signinText}>Sign In</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.signupButtton}
                onPress={() => navigation.navigate('Signup')}
              >
                <Text style={styles.signupTextSecondary}>
                  Don't have an account?
                </Text>
                <Text style={styles.btnLabels}>Sign up</Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default Signin;
