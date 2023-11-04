import { RedHatDisplay_500Medium, useFonts } from '@expo-google-fonts/red-hat-display';
import * as SplashScreen from 'expo-splash-screen';
import { observer } from 'mobx-react';
import { useCallback, useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import { useToken } from '../../store/token/token';
import { getAllLinks } from '@/api/links/links.api';
import Box from '@/src/controllers/box/box';
import linksStore from '@/store/links/links-store';

function LoadBuffer({ children }: { children: React.ReactNode }) {
  const { isTokenLoaded } = useToken();
  const [fontsLoaded, fontError] = useFonts({
    RedHatDisplay_500Medium,
  });

  useEffect(() => {
    async function getLinks() {
      const res = await getAllLinks();
      linksStore.setLinks(res);
    }
    if (linksStore.links.length === 0) {
      getLinks();
    }
    linksStore.loadFavoriteByUser();
  }, []);

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
        <Text style={{ fontSize: 16 }}>A problem occur while loading fonts</Text>
      </Box>
    );
  }

  if (!isTokenLoaded || !fontsLoaded || linksStore.links.length === 0) {
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

export default observer(LoadBuffer);
