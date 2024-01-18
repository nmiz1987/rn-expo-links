import { router } from 'expo-router';
import LottieView from 'lottie-react-native';
import { observer } from 'mobx-react';
import { FlatList, Platform } from 'react-native';
import Styles from './user-favorites.style';
import { linkProps } from '@/src/components/link-preview/link-preview.interfaces';
import LinkPreview from '@/src/components/link-preview/link-preview';
import Box from '@/src/controllers/box/box';
import Screen from '@/src/controllers/screen/screen';
import Spacer from '@/src/components/spacer/spacer';
import TextFactory from '@/src/factories/text-factory/text-factory';
import linksStore from '@/store/links/links-store';
import applicationStore from '@/store/application/application-store';

function Page() {
  if (!applicationStore.isLoggedIn) {
    router.replace('/');
  }

  if (linksStore.favoriteLinks.length === 0) {
    return (
      <Screen noScroll>
        <Box style={Styles.conatiner}>
          {Platform.OS !== 'web' && <LottieView style={Styles.lottie} autoPlay source={require('@/assets/lotties/space.json')} />}
          <Spacer size={32} />
          <TextFactory style={Styles.notFoundTxt} type="h2">
            First you need to select some link....
          </TextFactory>
        </Box>
      </Screen>
    );
  }

  return (
    <Screen noScroll>
      <FlatList
        data={linksStore.links.filter(link => linksStore.isFavoriteByUser(link._id))}
        renderItem={({ item }) => <LinkPreview link={item} />}
        keyExtractor={(item: linkProps) => item._id}
      />
    </Screen>
  );
}

export default observer(Page);
