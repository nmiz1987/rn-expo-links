import { StyleSheet } from 'react-native';
import { GlobalColors } from '@/styles/global-colors';
import { HebrewStyle } from '@/styles/text-styles';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
  },
  checkbox: {
    borderRadius: 50,
    borderColor: GlobalColors.Brand.primary,

    height: 24,
    width: 24,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerCheck: {
    width: 24,
    height: 24,
    backgroundColor: GlobalColors.Brand.primary,
  },
  inlineContainer: {
    borderColor: GlobalColors.BgColors.Bg1,
    borderWidth: 3,
    backgroundColor: GlobalColors.Brand.primary,
    height: 21,
    width: 21,
    borderRadius: 50,
  },
  containerUnCheck: {
    borderColor: GlobalColors.Border,
    backgroundColor: 'transparent',
  },
  label: {
    ...HebrewStyle.BodyText1,
  },
});
