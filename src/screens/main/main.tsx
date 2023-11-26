import LottieView from 'lottie-react-native';
import { FlatList } from 'react-native';
import useMain from './hooks/useMain';
import Styles from './main.style';
import FilterBar from '@/src/components/filter-bar/filter-bar';
import { linkProps } from '@/src/components/link/interfaces';
import Link from '@/src/components/link/link';
import Box from '@/src/controllers/box/box';
import Screen from '@/src/controllers/screen/screen';
import TextFactory from '@/src/factories/text-factory/text-factory';

export default function Page() {
  const { chosenCategory, searchTerms, filteredLinks, filterLinksByCategory, searchTermsHandler } = useMain();
  const searchIcon = require('@/assets/svg/search.svg');
  const xIcon = require('@/assets/svg/close.svg');

  return (
    <Screen noScroll>
      {filteredLinks.length ? (
        <FlatList
          ListHeaderComponent={
            <FilterBar
              chosenCategory={chosenCategory}
              searchTerms={searchTerms}
              rightIconImage={searchTerms ? xIcon : searchIcon}
              searchTermsHandler={searchTermsHandler}
              filterLinksByCategory={filterLinksByCategory}
            />
          }
          data={filteredLinks}
          renderItem={({ item }) => <Link link={item} />}
          keyExtractor={(item: linkProps) => item._id}
        />
      ) : (
        <Box>
          <FilterBar
            chosenCategory={chosenCategory}
            searchTerms={searchTerms}
            rightIconImage={searchTerms ? xIcon : searchIcon}
            searchTermsHandler={searchTermsHandler}
            filterLinksByCategory={filterLinksByCategory}
          />
          <LottieView style={Styles.lottie} autoPlay source={require('@/assets/lotties/space.json')} />
          <TextFactory style={Styles.noLinksFound} type="h6">
            houston we have a problem...
          </TextFactory>
        </Box>
      )}
    </Screen>
  );
}
