import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import React from 'react';
import styles from './styles';
import signupImg from '../../../../public/images/signup.jpg';
import { Formik } from 'formik';
import { signinForm } from './signup.form';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../../../types';
interface Props {
  onSignup: (
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    password: string,
  ) => void;
}

const Signup: React.FC<Props> = ({ onSignup }) => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <View style={styles.container}>
      <Image style={styles.imageContainer} source={signupImg} />
      <KeyboardAvoidingView style={styles.formContainer}>
        <ScrollView>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              phone: '',
              password: '',
              passwordConfirmation: '',
            }}
            onSubmit={(values) =>
              onSignup(
                values.firstName,
                values.lastName,
                values.email,
                values.phone,
                values.password,
              )
            }
            validationSchema={signinForm}
          >
            {({
              handleSubmit,
              handleChange,
              errors,
              setFieldTouched,
              touched,
            }) => (
              <>
                <Text style={styles.header}>Sign up</Text>
                <TextInput
                  style={styles.inputs}
                  onChangeText={handleChange('email')}
                  onFocus={() => setFieldTouched('email')}
                  placeholder="Email"
                  keyboardType="email-address"
                />
                {touched.email && errors.email ? (
                  <Text style={styles.errorMessages}>{errors.email}</Text>
                ) : null}
                <TextInput
                  style={styles.inputs}
                  onChangeText={handleChange('firstName')}
                  onFocus={() => setFieldTouched('firstName')}
                  placeholder="First Name"
                />
                {touched.firstName && errors.firstName ? (
                  <Text style={styles.errorMessages}>{errors.firstName}</Text>
                ) : null}
                <TextInput
                  style={styles.inputs}
                  onChangeText={handleChange('lastName')}
                  onFocus={() => setFieldTouched('lastName')}
                  placeholder="Last Name"
                />
                {touched.lastName && errors.lastName ? (
                  <Text style={styles.errorMessages}>{errors.lastName}</Text>
                ) : null}
                <TextInput
                  style={styles.inputs}
                  onChangeText={handleChange('phone')}
                  onFocus={() => setFieldTouched('phone')}
                  placeholder="Phone"
                  keyboardType="number-pad"
                />
                {touched.phone && errors.phone ? (
                  <Text style={styles.errorMessages}>{errors.phone}</Text>
                ) : null}
                <TextInput
                  style={styles.inputs}
                  onChangeText={handleChange('password')}
                  onFocus={() => setFieldTouched('password')}
                  placeholder="Password"
                  secureTextEntry
                />
                {touched.password && errors.password ? (
                  <Text style={styles.errorMessages}>{errors.password}</Text>
                ) : null}
                <TextInput
                  style={styles.inputs}
                  onChangeText={handleChange('passwordConfirmation')}
                  onFocus={() => setFieldTouched('passwordConfirmation')}
                  placeholder="Confirm Password"
                  secureTextEntry
                />
                {touched.passwordConfirmation && errors.passwordConfirmation ? (
                  <Text style={styles.errorMessages}>
                    {errors.passwordConfirmation}
                  </Text>
                ) : null}
                <TouchableOpacity
                  style={styles.signupButton}
                  activeOpacity={0.65}
                  onPress={() => handleSubmit()}
                >
                  <Text style={styles.signupText}>Sign up</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.signinButton}
                  onPress={() => navigation.navigate('Signin')}
                >
                  <Text style={styles.signinTextSecondary}>
                    Do you have an account?
                  </Text>
                  <Text style={styles.btnLabels}>Sign in</Text>
                </TouchableOpacity>
              </>
            )}
          </Formik>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Signup;
