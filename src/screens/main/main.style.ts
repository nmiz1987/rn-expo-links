import { StyleSheet } from 'react-native';
import { GlobalColors } from '@/styles/global-colors';

export default StyleSheet.create({
  categoriesContainer: {
    marginVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
    flexWrap: 'wrap',
  },
  tag: {
    color: 'white',
    borderRadius: 8,
    borderColor: GlobalColors.lightGray,
    borderWidth: 1,
    padding: 4,
  },
  tagMarked: {
    color: 'black',
    backgroundColor: 'gray',
  },
  image: {
    width: 50,
    height: 50,
    backgroundColor: '#0553',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
