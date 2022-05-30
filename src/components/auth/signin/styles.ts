import { StyleSheet } from 'react-native';

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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  checkbox: {
    paddingLeft: 0,
  },
  btnLabels: {
    fontSize: 12,
    fontWeight: '300',
    margin: 0,
  },
  signupButtton: {
    alignSelf: 'flex-start',
    marginTop: 10,
    marginVertical: 0,
    marginHorizontal: 0,
  },
});

export default styles;
