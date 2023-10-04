import {Text} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {TokenProvider} from '@/store/token/token';
import TokenLoadBuffer from '@/store/token/TokenLoadBuffer';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {Box} from '@/src/controllers/box/box';
import TextFactory from '@/src/factories/text-factory/text-factory';

const queryClient = new QueryClient();

export default function Page() {
  return (
    <TokenProvider>
      <TokenLoadBuffer>
        <QueryClientProvider client={queryClient}>
          <SafeAreaProvider>
            <StatusBar hidden={true} />
            <Box centerFullScreen>
              <TextFactory type="main-title">This is a big title</TextFactory>
            </Box>
          </SafeAreaProvider>
        </QueryClientProvider>
      </TokenLoadBuffer>
    </TokenProvider>
  );
}
