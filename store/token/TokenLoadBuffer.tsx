import * as SplashScreen from 'expo-splash-screen';
import {useCallback} from 'react';
import {StyleSheet, Text} from 'react-native';
import {useToken} from './token';
import {Box} from '@/src/controllers/box/box';
import {
  useFonts,
  RedHatDisplay_300Light,
  RedHatDisplay_400Regular,
  RedHatDisplay_500Medium,
  RedHatDisplay_600SemiBold,
  RedHatDisplay_700Bold,
  RedHatDisplay_800ExtraBold,
  RedHatDisplay_900Black,
  RedHatDisplay_300Light_Italic,
  RedHatDisplay_400Regular_Italic,
  RedHatDisplay_500Medium_Italic,
  RedHatDisplay_600SemiBold_Italic,
  RedHatDisplay_700Bold_Italic,
  RedHatDisplay_800ExtraBold_Italic,
  RedHatDisplay_900Black_Italic,
} from '@expo-google-fonts/red-hat-display';

export default function TokenLoadBuffer({children}: {children: React.ReactNode}) {
  const {isTokenLoaded} = useToken();
  let [fontsLoaded, fontError] = useFonts({
    RedHatDisplay_300Light,
    RedHatDisplay_400Regular,
    RedHatDisplay_500Medium,
    RedHatDisplay_600SemiBold,
    RedHatDisplay_700Bold,
    RedHatDisplay_800ExtraBold,
    RedHatDisplay_900Black,
    RedHatDisplay_300Light_Italic,
    RedHatDisplay_400Regular_Italic,
    RedHatDisplay_500Medium_Italic,
    RedHatDisplay_600SemiBold_Italic,
    RedHatDisplay_700Bold_Italic,
    RedHatDisplay_800ExtraBold_Italic,
    RedHatDisplay_900Black_Italic,
  });

  if (fontError) {
    return (
      <Box center>
        <Text style={{fontSize: 16}}>A problem occur while loading fonts</Text>
      </Box>
    );
  }

  const onLayoutRootView = useCallback(() => {
    if (isTokenLoaded) {
      return SplashScreen.hideAsync();
    }
  }, [isTokenLoaded]);

  if (!isTokenLoaded && !fontsLoaded) {
    SplashScreen.preventAutoHideAsync();
    return null;
  } else {
    return (
      <Box style={styles.fill} onLayout={onLayoutRootView}>
        {children}
      </Box>
    );
  }
}

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
});
