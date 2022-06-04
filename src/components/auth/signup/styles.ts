import { StyleSheet } from 'react-native';
import theme from '../../../styles/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
  },
  imageContainer: {
    flex: 2,
    width: '100%',
    resizeMode: 'cover',
    marginBottom: 4,
  },
  formContainer: {
    flex: 5,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    marginVertical: 4,
  },
  inputs: {
    borderWidth: 1,
    padding: 4,
    marginVertical: 6,
    borderRadius: 8,
  },
  btnLabels: {
    fontSize: 12,
    fontWeight: '300',
    margin: 0,
    color: theme.palette.text.primary,
  },
  signupButton: {
    backgroundColor: theme.palette.primary,
    marginTop: 12,
    padding: 8,
    borderRadius: 8,
    alignItems: 'center',
    color: 'white',
  },
  signupText: {
    fontSize: 16,
    fontWeight: '400',
    margin: 0,
    color: 'white',
  },
  signinButton: {
    alignItems: 'center',
    marginVertical: 12,
    marginHorizontal: 0,
    flexDirection: 'row',
  },
  signinTextSecondary: {
    color: theme.palette.text.secondary,
    marginRight: 5,
    fontSize: 12,
  },
  errorMessages: {
    color: theme.palette.primary_accent,
  },
});

export default styles;
