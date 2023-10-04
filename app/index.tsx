import {Text} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {TokenProvider} from '@/store/token/token';

export default function Page() {
  return (
    <TokenProvider>
      <SafeAreaProvider>
        <StatusBar hidden={true} />
        <Text>info</Text>
      </SafeAreaProvider>
    </TokenProvider>
  );
}
