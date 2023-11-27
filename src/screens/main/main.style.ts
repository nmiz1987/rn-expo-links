import { Dimensions, StyleSheet } from 'react-native';
import { GlobalColors } from '@/styles/global-colors';

const { width } = Dimensions.get('screen');

export default StyleSheet.create({
  noLinksFound: {
    color: GlobalColors.white,
    textAlign: 'center',
  },
  lottie: {
    width,
  },
});
