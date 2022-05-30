import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider as StoreProvider } from 'react-redux';
import Route from './src/navigation/main';
import store from './src/store';
import theme from './src/theme';

export default function App() {
  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <SafeAreaView style={{ flex: 1 }}>
          <Route />
          <StatusBar style="auto" />
        </SafeAreaView>
      </PaperProvider>
    </StoreProvider>
  );
}
