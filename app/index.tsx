import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {StatusBar} from 'expo-status-bar';
import {Text} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainPage from '@/src/screens/main/main';
import TokenLoadBuffer from '@/store/token/TokenLoadBuffer';
import {TokenProvider} from '@/store/token/token';


const queryClient = new QueryClient();

export default function Page() {
  return (
    <TokenProvider>
      <TokenLoadBuffer>
        <QueryClientProvider client={queryClient}>
          <SafeAreaProvider>
            <StatusBar hidden />
            <MainPage />
          </SafeAreaProvider>
        </QueryClientProvider>
      </TokenLoadBuffer>
    </TokenProvider>
  );
}
