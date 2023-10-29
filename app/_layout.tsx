import { Ionicons } from '@expo/vector-icons';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Tabs } from 'expo-router/tabs';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import LoadBuffer from '@/src/utils/LoadBuffer';
import { TokenProvider } from '@/store/token/token';
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
              <StatusBar />
              <Tabs
                screenOptions={{
                  headerStyle: {
                    backgroundColor: '#f4511e',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                }}
              >
                <Tabs.Screen
                  name="index"
                  options={{
                    href: '/',
                    title: 'All My Links',
                    tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />,
                    headerTitleAlign: 'center',
                    headerStyle: {
                      backgroundColor: GlobalColors.gray,
                    },

                    headerLeft: () => <Ionicons name="menu" color="white" size={35} />,
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                      fontWeight: 'bold',
                      fontSize: 28,
                    },
                  }}
                />
                <Tabs.Screen
                  name="fav"
                  options={{
                    href: '/fav',
                    title: 'fav',
                    tabBarIcon: ({ color, size }) => <Ionicons name="heart" color={color} size={size} />,
                    headerTitleAlign: 'center',
                    headerStyle: {
                      backgroundColor: GlobalColors.gray,
                    },

                    headerLeft: () => <Ionicons name="menu" color="white" size={35} />,
                    // headerRight: () => <Ionicons name="log-in-outline" color={'white'} size={35} />,
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                      fontWeight: 'bold',
                      fontSize: 28,
                    },
                  }}
                />
              </Tabs>
            </QueryClientProvider>
          </LoadBuffer>
        </TokenProvider>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
