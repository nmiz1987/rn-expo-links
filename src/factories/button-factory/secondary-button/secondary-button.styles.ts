import { StyleSheet } from 'react-native';
import { GlobalColors } from '@/styles/global-colors';
import { FontStyle } from '@/styles/styles';

export default StyleSheet.create({
  secondary: {
    backgroundColor: 'transparent',
    flex: 1,
    height: 56,
  },
  pressed: {
    opacity: 0.7,
  },
  container: {
    backgroundColor: GlobalColors.BgColors.Bg4,
    width: '100%',
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  label: {
    ...FontStyle.H3,
    color: 'black',
  },
});
