import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Drawer } from 'expo-router/drawer';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import LoadBuffer from '@/src/utils/LoadBuffer';
import { TokenProvider, useToken } from '@/store/token/token';
import { GlobalColors } from '@/styles/global-colors';
import '@/src/i18n';
import '@/src/utils/ignoreWarnings';
import CustomNavigationDrawer from '@/src/components/custom-navigation-drawer/custom-navigation-drawer';

const queryClient = new QueryClient();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const baseTheme = colorScheme === 'dark' ? DarkTheme : DefaultTheme;
  const { isLoggedIn } = useToken();

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
              <StatusBar style="light" />
              <Drawer
                screenOptions={{
                  headerTitleAlign: 'center',
                  headerStyle: {
                    backgroundColor: GlobalColors.gray,
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                  drawerActiveBackgroundColor: GlobalColors.blue,
                  drawerLabelStyle: {
                    fontSize: 16,
                    color: 'white',
                  },
                  drawerStyle: {
                    backgroundColor: GlobalColors.gray,
                  },
                }}
                drawerContent={props => <CustomNavigationDrawer {...props} />}
              >
                <Drawer.Screen
                  name="(content)"
                  options={{
                    drawerLabel: 'All My Links',
                    title: 'All My Links',
                  }}
                />
              </Drawer>
            </QueryClientProvider>
          </LoadBuffer>
        </TokenProvider>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
