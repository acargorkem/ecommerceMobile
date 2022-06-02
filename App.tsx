import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider as StoreProvider } from 'react-redux';
import Route from './src/navigation/main';
import store from './src/store';

export default function App() {
  return (
    <StoreProvider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <Route />
        <StatusBar style="auto" />
      </SafeAreaView>
    </StoreProvider>
  );
}
