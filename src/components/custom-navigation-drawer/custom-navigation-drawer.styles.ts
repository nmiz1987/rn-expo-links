import { GlobalColors } from '@/styles/global-colors';
import { Dimensions, StyleSheet } from 'react-native';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {},
  links: {
    height: 300,
  },
  specialButtons: {
    height: height - 450,
    paddingHorizontal: 16,
    alignItems: 'flex-end',
    flexDirection: 'row',
    gap: 12,
  },
  singOutText: {
    color: GlobalColors.white,
    fontSize: 18,
  },
});
