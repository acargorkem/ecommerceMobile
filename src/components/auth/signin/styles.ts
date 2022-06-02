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
    marginBottom: 10,
  },
  formContainer: {
    flex: 3,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    marginVertical: 10,
  },
  inputs: {
    borderWidth: 1,
    padding: 4,
    marginVertical: 4,
    borderRadius: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  rememberMeButton: {
    flexDirection: 'row',
    padding: 2,
    alignItems: 'center',
  },
  checkbox: {
    marginRight: 3,
  },
  btnLabels: {
    fontSize: 12,
    fontWeight: '300',
    margin: 0,
    color: theme.palette.text.primary,
  },
  signinButton: {
    backgroundColor: theme.palette.primary,
    padding: 8,
    borderRadius: 8,
    alignItems: 'center',
    color: 'white',
  },
  signinText: {
    fontSize: 16,
    fontWeight: '400',
    margin: 0,
    color: 'white',
  },
  signupButtton: {
    alignItems: 'center',
    marginTop: 15,
    marginVertical: 0,
    marginHorizontal: 0,
    flexDirection: 'row',
  },
  signupTextSecondary: {
    color: theme.palette.text.secondary,
    marginRight: 5,
    fontSize: 12,
  },
});

export default styles;
