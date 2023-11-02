import { useState } from 'react';
import { FlatList } from 'react-native';
import Style from './main.style';
import { linkProps } from '@/src/components/link/interfaces';
import Link from '@/src/components/link/link';
import Box from '@/src/controllers/box/box';
import Screen from '@/src/controllers/screen/screen';
import TextFactory from '@/src/factories/text-factory/text-factory';
import linksStore from '@/store/links/links-store';

export default function Page() {
  const [chosenCategory, setChosenCategory] = useState<string>('');
  const [links, setLinks] = useState<linkProps[]>(linksStore.links);

  function filterLinks(category: string) {
    if (category === chosenCategory) {
      setLinks(linksStore.links); // all links
      setChosenCategory('');
    } else {
      setChosenCategory(category);
      const filteredLinks = linksStore.links.filter(link => link.category === category);
      setLinks(filteredLinks);
    }
  }

  return (
    <Screen noScroll>
      <FlatList
        ListHeaderComponent={
          <Box style={Style.categoriesContainer}>
            {linksStore.categories.map(category => (
              <Box onPress={() => filterLinks(category)} key={category} style={[Style.tagContainer, chosenCategory === category && Style.tagMarked]}>
                <TextFactory style={Style.tag} type="h6">
                  {category}
                </TextFactory>
              </Box>
            ))}
          </Box>
        }
        data={links}
        renderItem={({ item }) => <Link link={item} />}
        keyExtractor={(item: linkProps) => item._id}
      />
    </Screen>
  );
}
