import * as SplashScreen from 'expo-splash-screen';
import {useCallback} from 'react';
import {StyleSheet, Text} from 'react-native';
import {useToken} from '../../store/token/token';
import {Box} from '@/src/controllers/box/box';
import {useFonts, RedHatDisplay_500Medium} from '@expo-google-fonts/red-hat-display';

export default function TokenLoadBuffer({children}: {children: React.ReactNode}) {
  const {isTokenLoaded} = useToken();
  const [fontsLoaded, fontError] = useFonts({
    RedHatDisplay_500Medium,
  });

  if (fontError) {
    return (
      <Box center>
        <Text style={{fontSize: 16}}>A problem occur while loading fonts</Text>
      </Box>
    );
  }

  const onLayoutRootView = useCallback(() => {
    if (isTokenLoaded && fontsLoaded) {
      return SplashScreen.hideAsync();
    }
  }, [isTokenLoaded, fontsLoaded]);

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
