import { FlatList } from 'react-native';
import Style from './user-favorites.style';
import { linkProps } from '@/src/components/link/interfaces';
import Link from '@/src/components/link/link';
import Box from '@/src/controllers/box/box';
import Screen from '@/src/controllers/screen/screen';
import TextFactory from '@/src/factories/text-factory/text-factory';
import linksStore from '@/store/links/links-store';

export default function Page() {
  if (linksStore.favoriteLinks.length === 0) {
    return (
      <Box centerFullScreen style={Style.notFoundContainer}>
        <TextFactory style={Style.notFoundTxt} type="h1">
          First you need to select some link...
        </TextFactory>
      </Box>
    );
  }

  return (
    <Screen noScroll>
      <FlatList
        data={linksStore.links.filter(link => linksStore.isFavoriteByUser(link._id))}
        renderItem={({ item }) => <Link link={item} />}
        keyExtractor={(item: linkProps) => item._id}
      />
    </Screen>
  );
}
