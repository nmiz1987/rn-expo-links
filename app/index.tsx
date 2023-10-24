import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ErrorBoundaryProps} from 'expo-router';
import {StatusBar} from 'expo-status-bar';
import {SafeAreaProvider, initialWindowMetrics} from 'react-native-safe-area-context';
import Box from '@/src/controllers/box/box';
import TextFactory from '@/src/factories/text-factory/text-factory';
import MainPage from '@/src/screens/main/main';
import LoadBuffer from '@/src/utils/LoadBuffer';
import {TokenProvider} from '@/store/token/token';
import '@/src/i18n';
import '@/src/utils/ignoreWarnings';

const queryClient = new QueryClient();

export function ErrorBoundary(props: ErrorBoundaryProps) {
  return (
    <Box style={{flex: 1, backgroundColor: 'red'}}>
      <TextFactory>{props.error.message}</TextFactory>
      <TextFactory onPress={props.retry}>Try Again?</TextFactory>
    </Box>
  );
}

export default function Page() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <TokenProvider>
        <LoadBuffer>
          <QueryClientProvider client={queryClient}>
            <StatusBar />
            <MainPage />
          </QueryClientProvider>
        </LoadBuffer>
      </TokenProvider>
    </SafeAreaProvider>
  );
}
