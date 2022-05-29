import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import store from './src/store';
import theme from './src/theme';
import Authscreen from './src/screens/auth';

export default function App() {
  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <Authscreen />
        <StatusBar style="auto" />
      </PaperProvider>
    </StoreProvider>
  );
}
