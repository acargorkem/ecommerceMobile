import { StyleSheet } from 'react-native';
import theme from '../../styles/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: theme.palette.common.black,
    paddingVertical: 18,
    paddingHorizontal: 16,
  },
  imageContainer: {
    height: 72,
    width: 72,
    borderRadius: 72 / 2,
    marginRight: 12,
  },
  headerTexts: {
    fontSize: 12,
  },
  welcomeText: {
    fontSize: 17,
  },
  userNameText: {
    fontSize: 19,
    fontWeight: '600',
  },
  forwardButtons: {
    marginLeft: 'auto',
  },
  navButtonsWrapper: {
    marginTop: 36,
    paddingHorizontal: 16,
  },
  navButton: {
    flexDirection: 'row',
    marginBottom: 24,
    alignItems: 'center',
  },
  navIcons: {
    marginRight: 20,
  },
  navText: {
    fontSize: 18,
  },
});

export default styles;
