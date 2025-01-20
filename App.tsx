import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeProvider } from './src/contexts/Theme';
import { StackNavigator } from './src/routes';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <GestureHandlerRootView>
      <ThemeProvider>
        <StatusBar />
        <StackNavigator />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
