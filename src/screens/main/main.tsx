import { useState } from 'react';
import { FlatList } from 'react-native';
import Style from './main.style';
import { linkProps } from '@/src/components/link/interfaces';
import Link from '@/src/components/link/link';
import Box from '@/src/controllers/box/box';
import Screen from '@/src/controllers/screen/screen';
import { Ionicons } from '@expo/vector-icons';
import TextFactory from '@/src/factories/text-factory/text-factory';
import linksStore from '@/store/links/links-store';
import { GlobalColors } from '@/styles/global-colors';
import TextInput from '@/src/controllers/text-input/text-input';
import Spacer from '@/src/controllers/spacer/spacer';

export default function Page() {
  const [chosenCategory, setChosenCategory] = useState<string>('');
  const [links, setLinks] = useState<linkProps[]>(linksStore.links);
  const [searchTerms, setSearchTerms] = useState<string>('');

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
  const searchIcon = require('@/assets/svg/search.svg');
  const xIcon = require('@/assets/svg/close.svg');

  let filteredLinks = links.filter((link: linkProps) => link.name.toLowerCase().includes(searchTerms.toLowerCase()));

  function Header() {
    return (
      <Box>
        <TextInput
          placeholder="Search..."
          iconImage={searchTerms ? xIcon : searchIcon}
          iconHandler={() => searchTerms.length > 0 && setSearchTerms('')}
          value={searchTerms}
          onChangeText={(value: string) => setSearchTerms(value)}
        />
        <Box style={Style.categoriesContainer}>
          <Spacer size={16} />
          {linksStore.categories.map(category => (
            <Box onPress={() => filterLinks(category)} key={category} style={[Style.tagContainer, chosenCategory === category && Style.tagMarked]}>
              <TextFactory style={Style.tag} type="h6">
                {category}
              </TextFactory>
            </Box>
          ))}
        </Box>
        <Spacer size={8} />
      </Box>
    );
  }

  if (filteredLinks.length === 0) {
    return (
      <Screen noScroll>
        <Header />
        <Box centerFullScreen>
          <TextFactory type="h2" style={Style.noLinksFound}>
            No links found...
          </TextFactory>
        </Box>
      </Screen>
    );
  }

  return (
    <Screen noScroll>
      <FlatList
        ListHeaderComponent={<Header />}
        data={filteredLinks}
        renderItem={({ item }) => <Link link={item} />}
        keyExtractor={(item: linkProps) => item._id}
      />
    </Screen>
  );
}
