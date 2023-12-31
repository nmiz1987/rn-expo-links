import { RedHatDisplay_500Medium, useFonts } from '@expo-google-fonts/red-hat-display';
import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { getAllLinks } from '@/api/links/links.api';
import Loader from '@/src/components/loader/loader';
import Box from '@/src/controllers/box/box';
import linksStore from '@/store/links/links-store';
import applicationStore from '@/store/application/application-store';

function LoadBuffer({ children }: { children: React.ReactNode }) {
  const [fontsLoaded, fontError] = useFonts({
    RedHatDisplay_500Medium,
  });

  if (fontError) throw new Error('Loading font failed');

  useEffect(() => {
    async function getLinks() {
      const links = await getAllLinks();
      if (!links) throw new Error('Loading failed');
      linksStore.setLinks(links);
    }
    if (linksStore.links.length === 0) {
      getLinks();
    }
    try {
      linksStore.loadFavoriteByUser();
      applicationStore.loadTokensFromStorageHandler();
    } catch (error) {
      console.error("error in LoadBuffer's useEffect", error);
    } finally {
      applicationStore.setIsFinishLoadTokensHandler(true);
    }
  }, []);

  if (!applicationStore.isFinishLoadTokens || !fontsLoaded || linksStore.links.length === 0) {
    return <Loader />;
  }

  return <Box style={Styles.fill}>{children}</Box>;
}

const Styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
});

export default observer(LoadBuffer);
