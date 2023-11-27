import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Drawer } from 'expo-router/drawer';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import CustomNavigationDrawer from '@/src/components/custom-navigation-drawer/custom-navigation-drawer';
import StorePreview from '@/src/components/store-preview/store-preview';
import links from '@/src/screens/links';
import LoadBuffer from '@/src/utils/LoadBuffer';
import linksStore from '@/store/links/links-store';
import { TokenProvider, useToken } from '@/store/token/token';
import { GlobalColors } from '@/styles/global-colors';
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
              <StatusBar style="light" />
              <StorePreview listeners={[linksStore, { token: useToken().token }]} />
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
                  drawerStyle: {
                    backgroundColor: GlobalColors.gray,
                  },
                }}
                drawerContent={props => <CustomNavigationDrawer {...props} />}
              >
                {Object.keys(links).map(link => (
                  <Drawer.Screen
                    key={links[link].title}
                    name={link}
                    options={{
                      title: links[link].title,
                    }}
                  />
                ))}
              </Drawer>
            </QueryClientProvider>
          </LoadBuffer>
        </TokenProvider>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
