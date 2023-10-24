import {DarkTheme, DefaultTheme, ThemeProvider} from '@react-navigation/native';
import {Slot} from 'expo-router';
import {useColorScheme} from 'react-native';
import {GlobalColors} from '@/styles/global-colors';

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
      <Slot />
    </ThemeProvider>
  );
}
