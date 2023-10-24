import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {StatusBar} from 'expo-status-bar';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainPage from '@/src/screens/main/main';
import TokenLoadBuffer from '@/src/utils/LoadBuffer';
import {TokenProvider} from '@/store/token/token';
import '@/src/i18n';
import '@/src/utils/ignoreWarnings';

const queryClient = new QueryClient();

export default function Page() {
  return (
    <TokenProvider>
      <TokenLoadBuffer>
        <QueryClientProvider client={queryClient}>
          <SafeAreaProvider>
            <StatusBar />
            <MainPage />
          </SafeAreaProvider>
        </QueryClientProvider>
      </TokenLoadBuffer>
    </TokenProvider>
  );
}
