import { FilterBarProps } from './filter-bar.interfaces';
import Styles from './filter-bar.styles';
import Box from '@/src/controllers/box/box';
import Spacer from '@/src/components/spacer/spacer';
import TextInput from '@/src/components/text-input/text-input';
import TextFactory from '@/src/factories/text-factory/text-factory';
import linksStore from '@/store/links/links-store';

const FilterBar = ({ chosenCategory, searchTerms, rightIconImage, searchTermsHandler, filterLinksByCategory }: FilterBarProps) => {
  return (
    <Box>
      <TextInput
        placeholder={chosenCategory ? `Search in ${chosenCategory}` : 'Search all links...'}
        rightIconImage={rightIconImage}
        rightIconHandler={() => searchTerms.length > 0 && searchTermsHandler('')}
        value={searchTerms}
        onChangeText={(value: string) => searchTermsHandler(value)}
      />
      <Box style={Styles.categoriesContainer}>
        <Spacer size={8} />
        {linksStore.categories.map(category => (
          <Box
            onPress={() => filterLinksByCategory(category)}
            key={category}
            style={[Styles.tagContainer, chosenCategory === category && Styles.tagMarked]}
          >
            <TextFactory style={Styles.tag} type="h6">
              {category}
            </TextFactory>
          </Box>
        ))}
      </Box>
      <Spacer size={8} />
    </Box>
  );
};

export default FilterBar;
