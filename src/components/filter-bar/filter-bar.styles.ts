import { StyleSheet } from 'react-native';
import { GlobalColors } from '@/styles/global-colors';

export default StyleSheet.create({
  categoriesContainer: {
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    rowGap: 5,
    columnGap: 5,
    flexWrap: 'wrap',
  },
  tagContainer: {
    backgroundColor: GlobalColors.gray,
    borderRadius: 8,
  },
  tagMarked: {
    color: 'black',
    backgroundColor: 'gray',
  },
  tag: {
    color: 'white',
    paddingVertical: 5,
    paddingHorizontal: 6,
  },
});
