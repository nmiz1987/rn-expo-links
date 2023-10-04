import { StyleSheet, Platform, PixelRatio, I18nManager } from 'react-native';
import { HebrewStyle, EnglishStyle } from '@/styles/styles';
import { GlobalColors } from '@/styles/global-colors';

let LanguageStyle = I18nManager.isRTL ? HebrewStyle : EnglishStyle;

export default StyleSheet.create({
  primary: {
    backgroundColor: 'transparent',
  },
  label: {
    ...LanguageStyle.BodyText2,
    color: 'white',
  },
  centered: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonBox: {
    alignItems: 'center',
  },
  background: {
    width: '100%',
    paddingVertical: 18,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
  shadow: {
    backgroundColor: 'white',
    shadowColor: '#ff007b',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
    borderRadius: 16,
  },
  disabledButton: {
    backgroundColor: GlobalColors.BgColors.Bg4,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    borderRadius: 16,
  },
  disabledText: {
    color: GlobalColors.IconsColors.secondary,
  },
});
