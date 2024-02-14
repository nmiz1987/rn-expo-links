import { FlatList } from 'react-native';
import LinkPreview from '@/src/components/link-preview/link-preview';
import { linkProps } from '@/src/components/link-preview/link-preview.interfaces';
import Screen from '@/src/controllers/screen/screen';
import linksStore from '@/store/links/links-store';

export default function Page() {
  return (
    <Screen noScroll>
      <FlatList
        data={linksStore.links.filter(link => link.recommended)}
        renderItem={({ item }) => <LinkPreview link={item} />}
        keyExtractor={(item: linkProps) => item._id}
      />
    </Screen>
  );
}
