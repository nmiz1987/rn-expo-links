import {Text} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {TokenProvider} from '@/store/token/token';
import TokenLoadBuffer from '@/store/token/TokenLoadBuffer';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function Page() {
  return (
    <TokenProvider>
      <TokenLoadBuffer>
        <QueryClientProvider client={queryClient}>
          <SafeAreaProvider>
            <StatusBar hidden={true} />
            <Text>info</Text>
          </SafeAreaProvider>
        </QueryClientProvider>
      </TokenLoadBuffer>
    </TokenProvider>
  );
}
