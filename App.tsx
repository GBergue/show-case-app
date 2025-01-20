import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeProvider } from './src/contexts/Theme';
import { StackNavigator } from './src/routes';

export default function App() {
  return (
    <GestureHandlerRootView>
      <ThemeProvider>
        <StackNavigator />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
