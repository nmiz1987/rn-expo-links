import { StyleSheet } from 'react-native';
import { GlobalColors } from '@/styles/global-colors';

export default StyleSheet.create({
  title: {
    color: GlobalColors.white,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'flex-end',
  },
  email: {
    color: GlobalColors.white,
  },
  textContainer: {
    flexDirection: 'row',
    gap: 12,
    marginHorizontal: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: GlobalColors.white,
  },
  link: {
    color: GlobalColors.IconsColors.blue,
    textDecorationLine: 'underline',
    textDecorationColor: GlobalColors.IconsColors.blue,
  },
});
