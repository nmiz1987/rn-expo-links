import { useState } from 'react';
import { FlatList } from 'react-native';
import { linkProps } from '@/src/components/link/interfaces';
import Link from '@/src/components/link/link';
import Box from '@/src/controllers/box/box';
import Screen from '@/src/controllers/screen/screen';
import TextFactory from '@/src/factories/text-factory/text-factory';
import linksStore from '@/store/links/links-store';
import { GlobalColors } from '@/styles/global-colors';

export default function Page() {
  const [chosenCategory, setChoosenCategory] = useState<string>('');
  const [links, setLinks] = useState<linkProps[]>(linksStore.links);

  function filterLinks(category: string) {
    if (category === chosenCategory) {
      setLinks(linksStore.links); // all links
      setChoosenCategory('');
    } else {
      setChoosenCategory(category);
      const filteredLinks = linksStore.links.filter(link => link.category === category);
      setLinks(filteredLinks);
    }
  }

  return (
    <Screen noScroll>
      <Box style={{ marginVertical: 16 }}>
        <Box style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 8, flexWrap: 'wrap' }}>
          {linksStore.categories.map(category => (
            <Box onPress={() => filterLinks(category)} key={category}>
              <TextFactory
                style={[
                  { color: 'white', borderRadius: 8, borderColor: GlobalColors.lightGray, borderWidth: 1, padding: 4 },
                  chosenCategory === category && { color: 'black', backgroundColor: 'gray' },
                ]}
                type="h6"
              >
                {category}
              </TextFactory>
            </Box>
          ))}
        </Box>
      </Box>
      <FlatList data={links} renderItem={({ item }) => <Link link={item} />} keyExtractor={(item: linkProps) => item._id} />
    </Screen>
  );
}
