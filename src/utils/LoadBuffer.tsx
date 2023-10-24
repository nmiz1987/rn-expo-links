import {RedHatDisplay_500Medium, useFonts} from '@expo-google-fonts/red-hat-display';
import * as SplashScreen from 'expo-splash-screen';
import {useCallback} from 'react';
import {StyleSheet, Text} from 'react-native';
import {useToken} from '../../store/token/token';
import Box from '@/src/controllers/box/box';

export default function LoadBuffer({children}: {children: React.ReactNode}) {
  const {isTokenLoaded} = useToken();
  const [fontsLoaded, fontError] = useFonts({
    RedHatDisplay_500Medium,
  });

  const onLayoutRootView = useCallback(() => {
    if (isTokenLoaded && fontsLoaded) {
      return SplashScreen.hideAsync();
    } else {
      return null;
    }
  }, [isTokenLoaded, fontsLoaded]);

  if (fontError) {
    return (
      <Box center>
        <Text style={{fontSize: 16}}>A problem occur while loading fonts</Text>
      </Box>
    );
  }

  if (!isTokenLoaded || !fontsLoaded) {
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
