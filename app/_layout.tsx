import {DarkTheme, DefaultTheme, ThemeProvider} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {Slot} from 'expo-router';
import {StatusBar} from 'expo-status-bar';
import {useColorScheme} from 'react-native';
import {SafeAreaProvider, initialWindowMetrics} from 'react-native-safe-area-context';
import LoadBuffer from '@/src/utils/LoadBuffer';
import {TokenProvider} from '@/store/token/token';
import {GlobalColors} from '@/styles/global-colors';
import '@/src/i18n';
import '@/src/utils/ignoreWarnings';

const queryClient = new QueryClient();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const baseTheme = colorScheme === 'dark' ? DarkTheme : DefaultTheme;

  const theme = {
    ...baseTheme,
    colors: {
      ...baseTheme.colors,
      primary: GlobalColors.TextColors.primary,
      background: GlobalColors.BgColors.Bg6,
    },
  };

  return (
    <ThemeProvider value={theme}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <TokenProvider>
          <LoadBuffer>
            <QueryClientProvider client={queryClient}>
              <StatusBar />
              <Slot />
            </QueryClientProvider>
          </LoadBuffer>
        </TokenProvider>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
