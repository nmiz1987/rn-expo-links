import {StyleSheet} from 'react-native';
import {GlobalColors} from '@/styles/global-colors';
import {HebrewStyle} from '@/styles/styles';

export default StyleSheet.create({
  secondary: {
    backgroundColor: 'transparent',
  },
  container: {
    backgroundColor: GlobalColors.BgColors.Bg4,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',

    ...HebrewStyle.H5,
    color: GlobalColors.TextColors.primary,
  },
  shadow: {
    shadowColor: 'rgba(44, 45, 46, 0.5)',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 0,
    elevation: 0,
    borderRadius: 16,
  },
});
